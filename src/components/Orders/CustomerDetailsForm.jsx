// src/components/CustomerDetailsForm.jsx
import React from 'react';

export default function CustomerDetailsForm({ customer, setCustomer }) {
    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    return (
        <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Customer Details</h3>
            <input
                name="name"
                placeholder="Full Name"
                value={customer.name}
                onChange={handleChange}
                className="border p-2 w-full mb-2"
            />
            <input
                name="email"
                placeholder="Email"
                value={customer.email}
                onChange={handleChange}
                className="border p-2 w-full mb-2"
            />
            <input
                name="phone"
                placeholder="Phone Number"
                value={customer.phone}
                onChange={handleChange}
                className="border p-2 w-full mb-2"
            />

            <textarea
                name="address"
                placeholder="Shipping Address"
                value={customer.address}
                onChange={handleChange}
                className="border p-2 w-full"
            />
        </div>
    );
}
