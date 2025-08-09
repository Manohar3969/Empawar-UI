import React from "react";
import { Link } from "react-router-dom";

export default function CategorySection({ categories }) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="text-2xl font-bold mb-6 text-[#6CA0A3]">Shop By Category</h2>
            <div className="flex flex-wrap gap-8 justify-center">
                {categories.map((cat, i) => (
                    <Link
                        key={cat.name}
                        to={`/products?category=${encodeURIComponent(cat.name)}`}
                        className="flex flex-col items-center group hover:scale-105 transition"
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-28 h-28 object-contain rounded-full mb-2 border-2 border-[#6CA0A3] group-hover:border-[#FAD4C0]"
                            draggable="false"
                        />
                        <span className="font-medium text-[#4A4A4A] dark:text-[#F1F5F9]">{cat.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
