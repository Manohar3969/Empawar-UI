import React from "react";
import { XIcon } from "@heroicons/react/outline";
import {useCart} from "../../contexts/CartContext.jsx";


export default function CartItem2({ item, index }) {
    const { removeFromCart, updateQuantity } = useCart();
    const { product, quantity, selectedSize, selectedColor } = item;
    console.log("CartContext in CartPage:", useCart());

    // Find color name (for display)
    const colorObj =
        product.colors?.find((c) => c.value === selectedColor) || {};

    return (
        <div className="flex items-center gap-4 py-4 border-b border-gray-200 dark:border-gray-600">
            <img
                src={
                    (colorObj.images && colorObj.images[0]) ||
                    product.images[0]
                }
                alt={product.name}
                className="w-24 h-28 object-cover object-top rounded"
            />

            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="font-semibold">{product.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            {selectedColor && (
                                <span>
                  Color:{" "}
                                    <span
                                        className="inline-block w-4 h-4 rounded-full align-middle"
                                        style={{ backgroundColor: selectedColor }}
                                    ></span>{" "}
                                    {colorObj.name || ""}
                </span>
                            )}
                            {selectedSize && (
                                <span className="ml-2">Size: {selectedSize}</span>
                            )}
                        </div>
                    </div>
                    {/* Remove Button */}
                    <button
                        aria-label="Remove"
                        onClick={() => removeFromCart(index)}
                        className="p-1 hover:bg-gray-100 dark:hover:bg-[#243047] rounded"
                        title="Remove"
                    >
                        <XIcon className="h-5 w-5 text-red-500" />
                    </button>
                </div>
                {/* Price */}
                <div className="mt-1 font-bold text-lg text-[#6CA0A3] dark:text-[#7DD3FC]">
                    ₹{product.price}
                    {product.originalPrice && (
                        <span className="ml-2 text-gray-400 line-through font-medium text-sm">
              ₹{product.originalPrice}
            </span>
                    )}
                </div>
                {/* Quantity selector */}
                <div className="flex items-center mt-2 gap-2">
                    <button
                        onClick={() =>
                            updateQuantity(index, Math.max(1, quantity - 1))
                        }
                        className="px-2 py-1 bg-[#FAD4C0] dark:bg-[#FBBF24] rounded text-xl font-bold"
                        disabled={quantity <= 1}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) =>
                            updateQuantity(index, Math.max(1, Number(e.target.value)))
                        }
                        className="w-12 py-0.5 border rounded text-center bg-white dark:bg-[#243047]"
                    />
                    <button
                        onClick={() => updateQuantity(index, quantity + 1)}
                        className="px-2 py-1 bg-[#FAD4C0] dark:bg-[#FBBF24] rounded text-xl font-bold"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
