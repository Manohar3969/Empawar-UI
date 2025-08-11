// src/components/SuccessMessage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function SuccessMessage({ order }) {
    return (
        <div className="bg-green-50 border border-green-400 p-4 rounded">
            <h3 className="text-green-700 font-bold text-xl">✅ Thank you for your purchase!</h3>
            <p>Your payment was successful.</p>
            <div className="mt-3 text-sm">
                <p><strong>Order ID:</strong> {order.orderId}</p>
                <p><strong>Payment ID:</strong> {order.paymentId || 'COD Order'}</p>
                <p><strong>Amount Paid:</strong> ₹{order.amount}</p>
                <p><strong>Date:</strong> {order.date}</p>
            </div>
            <div className="mt-4 flex gap-3">
                <Link to="/orders" className="bg-blue-600 text-white px-4 py-2 rounded">
                    View Orders
                </Link>
                <Link to="/products" className="bg-gray-500 text-white px-4 py-2 rounded">
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
}
