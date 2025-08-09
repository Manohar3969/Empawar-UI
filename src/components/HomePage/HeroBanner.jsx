import React from "react";

export default function HeroBanner() {
    return (
        <section className="relative flex items-center justify-center h-[420px] bg-gradient-to-r from-[#fafafa] via-[#FAD4C0] to-[#fff6ee] dark:from-[#27344A] dark:to-[#6CA0A3]">
            <img
                src="https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg"
                alt="Featured Banner"
                className="absolute inset-0 object-cover w-full h-full opacity-60"
                draggable="false"
            />
            <div className="relative z-10 text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-[#1E293B] dark:text-white mb-4">
                    Elevate Your Style with Summer's Best
                </h1>
                <p className="text-lg mb-6 text-[#4A4A4A] dark:text-gray-300">
                    Discover fresh trends, premium fabrics, and effortless fashion for your day.
                </p>
                <a
                    href="/products"
                    className="px-6 py-2 bg-[#6CA0A3] text-white rounded hover:bg-[#7BB0B0] font-bold"
                >
                    Shop Now
                </a>
            </div>
        </section>
    );
}
