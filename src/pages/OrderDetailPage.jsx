// src/pages/OrderDetailPage.jsx
import React from 'react';
import {useParams} from 'react-router-dom';
import {orders} from '../data/orders';
import OrderDetail from "../components/Orders/OrderDetail.jsx";


export default function OrderDetailPage() {
    const {id} = useParams();
    console.log("🔍 OrderDetailPage URL param id:", id); // DEBUG


    const order = orders.find(o => o.id === id);
    console.log("✅ OrderDetailPage found order:", order); // DEBUG


    if (!order) {
        console.warn("⚠️ No order found for id:", id); // DEBUG
        return <div className="p-6">Order not found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <OrderDetail order={order}/>
        </div>
    );
}
