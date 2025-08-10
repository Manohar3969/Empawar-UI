import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({products}) {
    if (!products || products.length === 0) {
        return (
            <div className="p-6 text-gray-500 dark:text-gray-300">No products found.</div>
        );
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.length === 0 ? (
                <p className="text-gray-600 col-span-full mt-10">No products match the selected filters.</p>
            ) : (
                products.map(prod => (
                    <ProductCard key={prod.id} product={prod}/>
                ))
            )}
        </div>
    );
}
