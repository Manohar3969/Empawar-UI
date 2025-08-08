// src/components/RecommendedProducts.jsx
import React from 'react';
import ProductCard from "../ProductsList/ProductCard.jsx";

export default function RecommendedProducts({ products }) {
    if (!products?.length) return null;
    return (
        <div>
            <h3 className="text-lg font-semibold mb-2">Recommended Products</h3>
            <div className="flex space-x-4 overflow-x-auto pb-2">
                {products.map(p => (
                    <div key={p.id} className="w-64 flex-shrink-0">
                        <ProductCard product={p} />
                    </div>
                ))}
            </div>
        </div>
    );
}
