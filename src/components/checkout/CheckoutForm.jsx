// src/components/CheckoutForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

export default function CheckoutForm() {
    // Replace with your dynamic cart total or keep static for testing
    const [amount, setAmount] = useState(100); // In INR, backend multiplies by 100 internally
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // Load Razorpay checkout script dynamically
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

        // 1. Load Razorpay script
        const razorpayLoaded = await loadRazorpayScript();
        if (!razorpayLoaded) {
            setMessage('⚠️ Razorpay SDK failed to load. Check your internet connection.');
            setLoading(false);
            return;
        }

        // 2. Create order on backend
        let order;
        try {
            const res = await axios.post('http://localhost:5000/create-order', {
                amount: amount,
                currency: 'INR',
            });
            if (!res.data.success) {
                setMessage('⚠️ Server error: order not created.');
                setLoading(false);
                return;
            }
            order = res.data.order;
            console.log('Order received from backend:', order);
        } catch (error) {
            setMessage('⚠️ Backend error, could not create order.');
            console.error('Order creation error:', error.response || error.message || error);
            setLoading(false);
            return;
        }

        // 3. Create Razorpay options and open checkout
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Vite env variable
            amount: order.amount,  // amount is in paise from backend
            currency: order.currency,
            name: 'My Demo Store',
            description: 'Test Transaction',
            order_id: order.id,
            handler: async function (response) {
                console.log('Payment success response:', response);

                // 4. Verify payment on backend
                try {
                    const verifyRes = await axios.post('http://localhost:5000/verify-payment', {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    });
                    console.log('Verification response:', verifyRes.data);

                    if (verifyRes.data.success) {
                        setMessage('✅ Payment successful!');
                    } else {
                        setMessage('❌ Payment verification failed!');
                    }
                } catch (verifyError) {
                    console.error('Verification error:', verifyError);
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
            theme: {
                color: '#3399cc',
            },
            modal: {
                ondismiss: () => {
                    setMessage('Payment popup closed.');
                    setLoading(false);
                },
            },
        };

        const paymentObject = new window.Razorpay(options);

        paymentObject.on('payment.failed', function (response) {
            setMessage('❌ Payment failed: ' + response.error.description);
            setLoading(false);
            console.error('Payment failed:', response.error);
        });

        paymentObject.open();
        // Keep loading until popup closes or handler executes
    };

    return (
        <div style={{ maxWidth: 320 }}>
            <h2>Checkout &amp; Payment</h2>
            <label>
                Amount (₹):{' '}
                <input
                    type="number"
                    min={1}
                    value={amount}
                    disabled={loading}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
            </label>
            <br />
            <button onClick={handlePayNow} disabled={loading} style={{ marginTop: 10 }}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>
            {message && <p style={{ marginTop: 10 }}>{message}</p>}
        </div>
    );
}
