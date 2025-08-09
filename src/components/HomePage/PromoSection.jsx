import React from "react";

export default function PromoSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAD4C0] rounded-lg p-8 text-center flex flex-col items-center shadow hover:scale-105 transition">
                <span className="text-3xl font-bold text-[#6CA0A3] mb-2">20% OFF</span>
                <span className="font-medium mb-2">On All Kurtas</span>
                <span className="text-[#4A4A4A] mb-1">Use code: SUMMER20</span>
            </div>
            <div className="bg-[#FFBC9A] rounded-lg p-8 text-center flex flex-col items-center shadow hover:scale-105 transition">
                <span className="text-3xl font-bold text-[#6CA0A3] mb-2">Free Shipping</span>
                <span className="font-medium mb-2">On orders above ₹500</span>
            </div>
            <div className="bg-[#bae6fd] rounded-lg p-8 text-center flex flex-col items-center shadow hover:scale-105 transition">
                <span className="text-3xl font-bold text-[#0e7490] mb-2">Buy 2 Get 1 Free</span>
                <span className="font-medium mb-2">On selected tops</span>
            </div>
        </section>
    );
}
