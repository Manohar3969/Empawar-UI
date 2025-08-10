// src/components/OrderCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderCard({ order }) {
    return (
        <div className="border rounded-lg p-4 shadow-sm flex flex-col gap-2">
            <div className="flex justify-between">
                <span className="text-sm font-semibold">Order #{order.id}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
          {order.status}
        </span>
            </div>
            <div className="text-xs text-gray-500">Placed on {order.date}</div>
            <div className="text-sm font-medium">Total: ₹{order.total}</div>
            <Link
                to={`/orders/${order.id}`}
                className="text-xs text-[#6CA0A3] font-semibold mt-2 hover:underline self-start"
            >
                View Details →
            </Link>
        </div>
    );
}
