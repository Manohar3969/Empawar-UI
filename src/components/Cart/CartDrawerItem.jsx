// src/components/CartDrawerItem.jsx
import React from 'react';

import { XIcon } from '@heroicons/react/outline';
import {useCart} from "../../contexts/CartContext.jsx";

export default function CartDrawerItem({ item, index }) {
    const { removeFromCart, updateQuantity } = useCart();
    const { product, quantity, selectedColor, selectedSize } = item;

    const colorObj = product.colors?.find(c => c.value === selectedColor) || {};

    return (
        <div className="flex gap-3">
            <img
                src={(colorObj.images?.[0]) || product.images[0]}
                alt={product.name}
                className="w-20 h-24 object-cover rounded"
            />
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h4 className="font-medium text-sm">{product.name}</h4>
                    <p className="text-xs text-gray-500">
                        {selectedColor && <>Color: {colorObj.name} </>}
                        {selectedSize && <>Size: {selectedSize}</>}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => updateQuantity(index, Math.max(1, quantity - 1))}
                        className="px-2 py-1 border rounded"
                    >
                        -
                    </button>
                    <span className="text-sm">{quantity}</span>
                    <button
                        onClick={() => updateQuantity(index, quantity + 1)}
                        className="px-2 py-1 border rounded"
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-end justify-between">
                <button
                    onClick={() => removeFromCart(index)}
                    className="p-1 hover:bg-gray-100 rounded"
                >
                    <XIcon className="h-4 w-4" />
                </button>
                <div className="text-sm font-bold">₹{product.price * quantity}</div>
            </div>
        </div>
    );
}
