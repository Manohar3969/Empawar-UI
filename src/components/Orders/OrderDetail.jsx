// src/components/OrderDetail.jsx
import React from 'react';
import {Link} from 'react-router-dom';
import OrderTrackingTimeline from './OrderTrackingTimeline';

export default function OrderDetail({order}) {
    console.log("🔍 OrderDetail Orders Details:", order); // DEBUG
    return (
        <div>
            <Link to="/orders" className="text-[#6CA0A3] text-sm hover:underline">← Back to Orders</Link>
            <h1 className="text-2xl font-bold mb-4">Order #{order.id}</h1>
            <div className="text-sm text-gray-500">Placed on {order.date}</div>
            <div className="my-4">
        <span className={`px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs`}>
          {order.status}
        </span>
            </div>

            <h2 className="font-semibold mt-4 mb-2">Tracking</h2>
            <OrderTrackingTimeline stages={order.deliveryStages}/>

            <h2 className="font-semibold mt-6 mb-2">Items</h2>
            <div className="space-y-3 border p-4 rounded">
                {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                        <div className="flex gap-3">
                            <img src={item.img} alt={item.name} className="w-12 h-12 rounded"/>
                            <div>
                                <div className="text-sm font-medium">{item.name}</div>
                                <div className="text-xs text-gray-500">Qty: {item.qty}</div>
                            </div>
                        </div>
                        <div className="text-sm font-semibold">₹{item.price}</div>
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <p className="text-sm"><strong>Shipping Address:</strong> {order.shippingAddress}</p>
                <p className="text-sm"><strong>Payment Method:</strong> {order.paymentMethod}</p>
            </div>

            <div className="mt-4 text-right font-semibold">Total: ₹{order.total}</div>
        </div>
    );
}
