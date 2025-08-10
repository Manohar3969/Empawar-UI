import React, { useState } from 'react';
import axios from 'axios';

export default function CheckoutForm() {
    const [amount, setAmount] = useState(100); // You can replace with your cart total
    const [message, setMessage] = useState('');

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            if (document.getElementById('razorpay-script')) {
                resolve(true);
                return;
            }
            const script = document.createElement('script');
            script.id = 'razorpay-script';
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    async function displayRazorpay() {
        const res = await loadRazorpayScript();

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        try {
            // Call backend to create order
            const result = await axios.post('http://localhost:5000/create-order', {
                amount: amount,
                currency: 'INR',
            });

            if (!result.data.success) {
                alert('Server error. Are you running backend server?');
                return;
            }

            const { order } = result.data;

            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,  // Put your Razorpay test/public key here or in .env
                amount: order.amount,
                currency: order.currency,
                name: 'Your Store Name',
                description: 'Test Transaction',
                order_id: order.id,
                handler: async function (response) {
                    try {
                        const verifyRes = await axios.post('http://localhost:5000/verify-payment', {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                        });

                        if (verifyRes.data.success) {
                            setMessage('Payment successful!');
                        } else {
                            setMessage('Payment verification failed!');
                        }
                    } catch (err) {
                        setMessage('Payment verification error.');
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
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (err) {
            alert('Backend error, could not create order.');
            console.error(err);
        }
    }

    return (
        <div className="checkout-form">
            <h2>Checkout &amp; Payment</h2>
            <label>
                Amount (₹):{' '}
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    min="1"
                />
            </label>
            <button onClick={displayRazorpay} className="btn-primary" style={{marginTop: '10px'}}>
                Pay Now
            </button>
            {message && <p>{message}</p>}
        </div>
    );
}
