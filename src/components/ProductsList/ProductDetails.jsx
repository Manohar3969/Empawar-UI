// src/components/ProductDetails.jsx
import React from "react";

export default function ProductDetails({ product, onAddToCart }) {
    if (!product) return <p>Product not found.</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto rounded-lg shadow"
                />
            </div>

            <div>
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-500 mb-4">{product.category}</p>
                <p className="text-xl font-semibold text-green-600 mb-4">₹{product.price}</p>
                <p className="mb-6">{product.description || "No description available."}</p>

                <button
                    onClick={() => onAddToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
