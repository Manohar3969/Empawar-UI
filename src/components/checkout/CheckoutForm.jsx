// src/components/CheckoutForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CheckoutForm() {
    const [amount, setAmount] = useState(100);
    const [loading, setLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null); // 'success', 'failed', or null
    const [orderDetails, setOrderDetails] = useState(null);
    const [message, setMessage] = useState('');

    // --- Mock similar products ---
    const similarProducts = [
        { id: 1, name: 'Product A', price: 299, img: '/img/product-a.jpg' },
        { id: 2, name: 'Product B', price: 499, img: '/img/product-b.jpg' },
        { id: 3, name: 'Product C', price: 799, img: '/img/product-c.jpg' },
    ];

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

    const handlePayNow = async () => {
        setMessage('');
        setLoading(true);

        const loaded = await loadRazorpayScript();
        if (!loaded) {
            setMessage('⚠️ Razorpay SDK failed to load.');
            setLoading(false);
            return;
        }

        // Create order on backend
        let order;
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/create-order`, {
                amount: amount,
                currency: 'INR',
            });
            if (!res.data.success) {
                setMessage('Could not create order.');
                setLoading(false);
                return;
            }
            order = res.data.order;
        } catch (err) {
            console.error(err);
            setMessage('Backend error, could not create order.');
            setLoading(false);
            return;
        }

        // Options for Razorpay checkout
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'My Demo Store',
            description: 'Order Payment',
            order_id: order.id,
            handler: async function (response) {
                try {
                    const verifyRes = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/verify-payment`, {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    });

                    if (verifyRes.data.success) {
                        setPaymentStatus('success');
                        setOrderDetails({
                            orderId: order.id,
                            paymentId: response.razorpay_payment_id,
                            amount: order.amount / 100,
                            date: new Date().toLocaleString(),
                        });
                        setMessage('✅ Payment successful!');
                    } else {
                        setPaymentStatus('failed');
                        setMessage('❌ Payment verification failed.');
                    }
                } catch (err) {
                    console.error(err);
                    setPaymentStatus('failed');
                    setMessage('⚠️ Payment verification error.');
                } finally {
                    setLoading(false);
                }
            },
            prefill: {
                name: 'John Doe',
                email: 'john.doe@example.com',
                contact: '9999999999',
            },
            theme: { color: '#3399cc' },
            modal: { ondismiss: () => setLoading(false) },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.on('payment.failed', function () {
            setPaymentStatus('failed');
            setMessage('❌ Payment failed. Please try again.');
            setLoading(false);
        });

        paymentObject.open();
    };

    return (
        <div className="checkout-container" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2 className="text-2xl font-bold mb-4">Checkout Page</h2>

            {/* Before Payment */}
            {!paymentStatus && (
                <>
                    <label className="block mb-2">
                        Amount (₹):{' '}
                        <input
                            type="number"
                            value={amount}
                            min={1}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="border px-2 py-1"
                            disabled={loading}
                        />
                    </label>
                    <button
                        onClick={handlePayNow}
                        disabled={loading}
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        {loading ? 'Processing...' : 'Pay Now'}
                    </button>
                    {message && <p className="mt-2">{message}</p>}
                </>
            )}

            {/* After Payment */}
            {paymentStatus === 'success' && orderDetails && (
                <div className="mt-6 p-4 border rounded bg-green-50">
                    <h3 className="text-xl font-semibold text-green-700">✅ Thank you for your purchase!</h3>
                    <p>Your payment was successful.</p>
                    <div className="mt-3">
                        <p><strong>Order ID:</strong> {orderDetails.orderId}</p>
                        <p><strong>Payment ID:</strong> {orderDetails.paymentId}</p>
                        <p><strong>Amount Paid:</strong> ₹{orderDetails.amount}</p>
                        <p><strong>Date:</strong> {orderDetails.date}</p>
                    </div>
                    <div className="mt-4 flex gap-3">
                        <Link to="/orders" className="bg-blue-600 text-white px-4 py-2 rounded">
                            View Orders
                        </Link>
                        <Link to="/shop" className="bg-gray-500 text-white px-4 py-2 rounded">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            )}

            {paymentStatus === 'failed' && (
                <div className="mt-6 p-4 border rounded bg-red-50">
                    <h3 className="text-xl font-semibold text-red-700">❌ Payment Failed</h3>
                    <p>{message}</p>
                    <button
                        onClick={handlePayNow}
                        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Retry Payment
                    </button>
                </div>
            )}

            {/* Similar Products */}
            {(paymentStatus === 'success' || paymentStatus === 'failed') && (
                <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-3">You might also like</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {similarProducts.map((prod) => (
                            <div key={prod.id} className="border rounded p-2 text-center hover:shadow-lg">
                                <img src={prod.img} alt={prod.name} className="w-full h-32 object-cover mb-2" />
                                <p className="font-medium">{prod.name}</p>
                                <p className="text-sm text-gray-600">₹{prod.price}</p>
                                <Link
                                    to={`/product/${prod.id}`}
                                    className="mt-1 inline-block bg-blue-500 text-white py-1 px-3 rounded text-sm"
                                >
                                    View
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
