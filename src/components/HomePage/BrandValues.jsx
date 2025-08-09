import React from "react";
import { CheckCircleIcon, TruckIcon, RefreshIcon } from "@heroicons/react/outline";

export default function BrandValues() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
                <CheckCircleIcon className="h-12 w-12 text-[#6CA0A3]" />
                <div>
                    <div className="font-bold text-lg">100% Authentic & Quality</div>
                    <div className="text-gray-500 dark:text-gray-300 text-sm">
                        Premium fabrics & trusted brands.
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <TruckIcon className="h-12 w-12 text-[#6CA0A3]" />
                <div>
                    <div className="font-bold text-lg">Fast Free Delivery</div>
                    <div className="text-gray-500 dark:text-gray-300 text-sm">
                        Delivered in 3-5 days, free over ₹500.
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <RefreshIcon className="h-12 w-12 text-[#6CA0A3]" />
                <div>
                    <div className="font-bold text-lg">Easy Returns</div>
                    <div className="text-gray-500 dark:text-gray-300 text-sm">
                        7-day hassle-free returns policy.
                    </div>
                </div>
            </div>
        </section>
    );
}
