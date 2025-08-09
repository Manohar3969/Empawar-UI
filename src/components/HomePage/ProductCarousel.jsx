import React from "react";
import ProductCard from "../ProductsList/ProductCard.jsx";


export default function ProductCarousel({ title, products }) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            <div className="flex space-x-6 overflow-x-auto pb-3">
                {products.map((product) => (
                    <div key={product.id} className="min-w-[240px]">
                        <ProductCard product={product} compact />
                    </div>
                ))}
            </div>
        </section>
    );
}
