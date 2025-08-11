// src/components/SimilarProducts.jsx
import React from 'react';
import products from '../../data/products';
import {Link} from 'react-router-dom';

export default function SimilarProducts() {
    return (
        <div className="mt-6">
            <h4 className="font-semibold text-lg mb-3">You might also like</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {products.map((p) => (
                    <div key={p.id} className="border rounded p-2 text-center">
                        <img src={p.image} alt={p.name} className="h-32 mx-auto mb-2"/>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-gray-600">₹{p.price}</p>
                        <Link
                            to={`/product/${p.id}`}
                            className="inline-block bg-blue-500 text-white px-3 py-1 rounded mt-2"
                        >
                            View
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
