// src/components/OrderSummary.jsx
import React from 'react';

export default function OrderSummary({ cartItems, total }) {
    return (
        <div className="border p-4 mb-4 rounded">
            <h3 className="font-semibold text-lg mb-2">Order Summary</h3>
            {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between mb-1">
                    <span>{item.name} × {item.qty}</span>
                    <span>₹{item.price * item.qty}</span>
                </div>
            ))}
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹{total}</span>
            </div>
        </div>
    );
}
