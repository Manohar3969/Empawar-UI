// src/pages/OrdersPage.jsx
import React from 'react';
import { orders } from '../data/orders';
import OrderCard from "../components/Orders/OrderCard.jsx";


export default function OrdersPage() {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">My Orders</h1>
            {orders.length === 0 ? (
                <p>You have no orders.</p>
            ) : (
                <div className="grid md:grid-cols-2 gap-4">
                    {orders.map(order => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                </div>
            )}
        </div>
    );
}
