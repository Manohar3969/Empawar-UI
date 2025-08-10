import React from 'react';
import CheckoutForm from "../components/checkout/CheckoutForm.jsx";


export default function CheckoutPage() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            {/* Optional: Insert cart summary and shipping address components here */}
            <CheckoutForm />
        </div>
    );
}
