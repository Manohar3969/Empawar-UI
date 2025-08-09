import React from "react";

const testimonials = [
    {
        name: "Aditi (Bangalore)",
        text: "Beautiful styles, soft cotton and super quick delivery!",
        rating: 5,
    },
    {
        name: "Rahul (Delhi)",
        text: "Quality is excellent. Great offers too.",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-10">
            <h2 className="text-2xl font-bold mb-6 text-[#6CA0A3]">What Our Customers Say</h2>
            <div className="flex flex-wrap gap-8 justify-center">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="bg-[#f9f9f9] dark:bg-[#243047] rounded-lg p-6 min-w-[220px] shadow text-left"
                    >
                        <div className="font-semibold mb-2">{t.name}</div>
                        <div className="mb-2 text-gray-500 dark:text-gray-300">{t.text}</div>
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, idx) =>
                                <span key={idx} className={`h-4 w-4 inline-block ${idx < t.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
