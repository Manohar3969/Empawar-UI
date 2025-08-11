// src/pages/CheckoutPage.jsx
import React from 'react';
import CheckoutForm from "../components/checkout/CheckoutForm.jsx";


// Example cart items — in real app, data would come from CartContext or Redux
const cartItemsMock = [
    { id: 1, name: 'Red Cotton T-shirt', price: 499, qty: 2 },
    { id: 2, name: 'Blue Denim Jeans', price: 1299, qty: 1 }
];

export default function CheckoutPage() {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <CheckoutForm cartItems={cartItemsMock} />
        </div>
    );
}
