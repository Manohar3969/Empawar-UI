// src/components/ColorPicker.jsx
import React from 'react';

export default function ColorPicker({ colors, selectedColor, onColorChange }) {
    return (
        <div className="flex space-x-2 mt-1">
            {colors.map((color, idx) => (
                <button
                    key={color.value}
                    className={`w-7 h-7 rounded-full border-2 ring-2 transition-all ${
                        selectedColor === color.value
                            ? 'border-[#6CA0A3] ring-[#6CA0A3]'
                            : 'border-gray-300 ring-transparent'
                    }`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => onColorChange(color.value)}
                />
            ))}
        </div>
    );
}
