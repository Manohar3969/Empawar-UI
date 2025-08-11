// src/components/PaymentOptions.jsx
import React from 'react';

export default function PaymentOptions({ paymentMethod, setPaymentMethod }) {
    return (
        <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Payment Method</h3>
            <label className="block mb-2">
                <input
                    type="radio"
                    name="paymentMethod"
                    value="razorpay"
                    checked={paymentMethod === 'razorpay'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span className="ml-2">Pay Online (Razorpay)</span>
            </label>
            <label className="block">
                <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span className="ml-2">Cash on Delivery (COD)</span>
            </label>
        </div>
    );
}
