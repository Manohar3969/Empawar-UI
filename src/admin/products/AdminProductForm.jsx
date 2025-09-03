import React, { useState } from "react";

export default function AdminProductForm({ initialData, onSubmit }) {
    const [form, setForm] = useState(
        initialData || {
            name: "",
            description: "",
            image: "",
            price: "",
            originalPrice: "",
            category: "",
            badge: "",
            inStock: true,
        }
    );

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm((f) => ({
            ...f,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(form);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <input
                className="w-full border rounded px-3 py-2"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Product Name"
                required
            />
            <textarea
                className="w-full border rounded px-3 py-2"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <input
                className="w-full border rounded px-3 py-2"
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="Image URL"
            />
            <input
                className="w-full border rounded px-3 py-2"
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                required
            />
            <input
                className="w-full border rounded px-3 py-2"
                type="number"
                name="originalPrice"
                value={form.originalPrice}
                onChange={handleChange}
                placeholder="Original Price"
            />
            <input
                className="w-full border rounded px-3 py-2"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="Category"
                required
            />
            <input
                className="w-full border rounded px-3 py-2"
                name="badge"
                value={form.badge}
                onChange={handleChange}
                placeholder="Badge"
            />
            <label className="flex items-center">
                <input
                    type="checkbox"
                    name="inStock"
                    checked={form.inStock}
                    onChange={handleChange}
                />
                <span className="ml-2">In Stock</span>
            </label>
            <button
                type="submit"
                className="bg-[#6CA0A3] text-white px-4 py-2 rounded"
            >
                Save
            </button>
        </form>
    );
}
