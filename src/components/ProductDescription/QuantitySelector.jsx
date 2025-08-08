// src/components/QuantitySelector.jsx
import React from 'react';

export default function QuantitySelector({ value, setValue, min = 1, max = 10 }) {
    return (
        <div className="flex items-center space-x-2 mt-2">
            <button
                type="button"
                onClick={() => setValue(Math.max(min, value - 1))}
                className="px-2 py-1 bg-[#FAD4C0] dark:bg-[#FBBF24] rounded font-bold"
                disabled={value <= min}
            >
                -
            </button>
            <input
                type="number"
                min={min}
                max={max}
                value={value}
                onChange={e => setValue(Number(e.target.value))}
                className="w-10 text-center border rounded"
            />
            <button
                type="button"
                onClick={() => setValue(Math.min(max, value + 1))}
                className="px-2 py-1 bg-[#FAD4C0] dark:bg-[#FBBF24] rounded font-bold"
                disabled={value >= max}
            >
                +
            </button>
        </div>
    );
}
