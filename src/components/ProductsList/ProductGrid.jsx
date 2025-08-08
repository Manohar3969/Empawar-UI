import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
    if (!products || products.length === 0) {
        return (
            <div className="p-6 text-gray-500 dark:text-gray-300">No products found.</div>
        );
    }
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}
