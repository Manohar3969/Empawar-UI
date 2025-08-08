// src/components/SizeSelector.jsx
import React from 'react';

export default function SizeSelector({ sizes, selectedSize, onSizeChange }) {
    return (
        <div className="flex space-x-2 mt-1">
            {sizes.map((size, idx) => (
                <button
                    key={size.label}
                    disabled={!size.available}
                    className={`px-3 py-1 rounded border font-medium ${
                        selectedSize === size.label ? 'bg-[#6CA0A3] text-white' : 'bg-white dark:bg-[#243047] text-[#4A4A4A] dark:text-[#F1F5F9]'
                    } ${!size.available ? 'opacity-40 line-through cursor-not-allowed' : 'hover:border-[#6CA0A3] dark:hover:border-[#7DD3FC]'}`}
                    onClick={() => onSizeChange(size.label)}
                >
                    {size.label}
                </button>
            ))}
        </div>
    );
}
