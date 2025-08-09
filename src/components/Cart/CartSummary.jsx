import React, { useState } from "react";
import {useCart} from "../../contexts/CartContext.jsx";


export default function CartSummary() {
    const { cartItems } = useCart();
    const [promoCode, setPromoCode] = useState("");
    const [appliedPromo, setAppliedPromo] = useState(null);
    const [promoError, setPromoError] = useState("");

    // Calculate subtotal
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );
    // Simple promo: DEMO10 gives 10% off
    const discount =
        appliedPromo === "DEMO10" ? Math.round(subtotal * 0.1) : 0;
    const shipping = subtotal > 500 ? 0 : 50;
    const tax = Math.round(subtotal * 0.05);
    const total = subtotal + shipping + tax - discount;

    // Handle promo code application
    const handleApplyPromo = () => {
        if (promoCode.trim().toUpperCase() === "DEMO10") {
            setAppliedPromo("DEMO10");
            setPromoError("");
        } else {
            setPromoError("Invalid promo code");
            setAppliedPromo(null);
        }
    };

    return (
        <aside className="bg-white dark:bg-[#1E293B] rounded-lg shadow p-6 min-w-[280px]">
            <div className="mb-4">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax (GST 5%)</span>
                    <span>₹{tax}</span>
                </div>
                {appliedPromo && (
                    <div className="flex justify-between text-[#6CA0A3] font-semibold">
                        <span>Discount</span>
                        <span>-₹{discount}</span>
                    </div>
                )}
                <div className="border-t border-gray-200 dark:border-gray-600 mt-3" />
                <div className="flex justify-between mt-3 text-lg font-bold">
                    <span>Total</span>
                    <span>₹{total}</span>
                </div>
            </div>

            {/* Promo code */}
            <div className="mb-4">
                {appliedPromo ? (
                    <div className="text-green-600">Code "{appliedPromo}" applied!</div>
                ) : (
                    <>
                        <input
                            type="text"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                            className="w-2/3 px-2 py-1 border rounded mr-2 bg-white dark:bg-[#243047]"
                            placeholder="Promo code"
                        />
                        <button
                            onClick={handleApplyPromo}
                            className="px-3 py-1 bg-[#6CA0A3] text-white rounded hover:bg-[#7BB0B0] dark:bg-[#7DD3FC] dark:text-[#1E293B] disabled:bg-gray-300"
                            disabled={!promoCode.trim()}
                        >
                            Apply
                        </button>
                        {promoError && (
                            <div className="text-red-500 text-sm mt-1">{promoError}</div>
                        )}
                    </>
                )}
            </div>

            {/* Checkout button */}
            <button className="w-full py-2 rounded bg-[#6CA0A3] hover:bg-[#7BB0B0] text-white dark:bg-[#7DD3FC] dark:text-[#1E293B] font-bold mt-2">
                Proceed to Checkout
            </button>
        </aside>
    );
}
