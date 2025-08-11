// src/components/CheckoutForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import CustomerDetailsForm from "../Orders/CustomerDetailsForm.jsx";
import OrderSummary from "../Orders/OrderSummary.jsx";
import PaymentOptions from "../Orders/PaymentOptions.jsx";
import SuccessMessage from "../Orders/SuccessMessage.jsx";
import SimilarProducts from "../ProductsList/SimilarProducts.jsx";
import FailureMessage from "../Orders/FailureMessage.jsx";


export default function CheckoutForm({ cartItems }) {
    const [customer, setCustomer] = useState({ name: '', email: '', phone: '', address: '' });
    const [paymentMethod, setPaymentMethod] = useState('razorpay');
    const [loading, setLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [orderDetails, setOrderDetails] = useState(null);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            if (window.Razorpay) return resolve(true);
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const handlePlaceOrder = async () => {
        if (!customer.name || !customer.email || !customer.phone || !customer.address) {
            alert('Please fill all required fields.');
            return;
        }
        setLoading(true);
        setPaymentStatus(null);

        if (paymentMethod === 'cod') {
            // COD Flow
            try {
                const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/create-cod-order`, {
                    customer,
                    items: cartItems,
                    amount: total,
                });
                if (res.data.success) {
                    setOrderDetails({
                        orderId: res.data.orderId,
                        paymentId: null,
                        amount: total,
                        date: new Date().toLocaleString(),
                    });
                    setPaymentStatus('success');
                } else {
                    setPaymentStatus('failed');
                }
            } catch (err) {
                console.error(err);
                setPaymentStatus('failed');
            } finally {
                setLoading(false);
            }
            return;
        }

        // Razorpay flow
        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) {
            alert('Failed to load Razorpay SDK.');
            setLoading(false);
            return;
        }

        // Create order in backend
        let order;
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/create-order`, {
                amount: total,
                currency: 'INR',
            });
            if (!res.data.success) throw new Error('Order not created');
            order = res.data.order;
        } catch (err) {
            console.error(err);
            alert('Backend error creating Razorpay order.');
            setLoading(false);
            return;
        }

        // Open Razorpay
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'My Demo Store',
            description: 'Order Payment',
            order_id: order.id,
            handler: async (response) => {
                try {
                    const verifyRes = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/verify-payment`, {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                        customer,
                        items: cartItems
                    });
                    if (verifyRes.data.success) {
                        setOrderDetails({
                            orderId: order.id,
                            paymentId: response.razorpay_payment_id,
                            amount: order.amount / 100,
                            date: new Date().toLocaleString(),
                        });
                        setPaymentStatus('success');
                    } else {
                        setPaymentStatus('failed');
                    }
                } catch (err) {
                    console.error(err);
                    setPaymentStatus('failed');
                } finally {
                    setLoading(false);
                }
            },
            prefill: {
                name: customer.name,
                email: customer.email,
                contact: customer.phone,
            },
            theme: { color: '#3399cc' },
            modal: { ondismiss: () => setLoading(false) },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.on('payment.failed', () => {
            setPaymentStatus('failed');
            setLoading(false);
        });
        paymentObject.open();
    };

    return (
        <div>
            {!paymentStatus && (
                <>
                    <CustomerDetailsForm customer={customer} setCustomer={setCustomer} />
                    <OrderSummary cartItems={cartItems} total={total} />
                    <PaymentOptions paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
                    <button
                        onClick={handlePlaceOrder}
                        disabled={loading}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        {loading ? 'Processing...' : paymentMethod === 'cod' ? 'Place Order' : 'Pay Now'}
                    </button>
                </>
            )}
            {paymentStatus === 'success' && orderDetails && (
                <>
                    <SuccessMessage order={orderDetails} />
                    <SimilarProducts />
                </>
            )}
            {paymentStatus === 'failed' && (
                <>
                    <FailureMessage retry={handlePlaceOrder} />
                    <SimilarProducts />
                </>
            )}
        </div>
    );
}
