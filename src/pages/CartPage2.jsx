import React from "react";
import {useCart} from "../contexts/CartContext.jsx";

import {Link} from "react-router-dom";
import CartItem2 from "../components/Cart/CartItem2.jsx";
import CartSummary from "../components/Cart/CartSummary.jsx";

export default function CartPage2() {
    const {cartItems} = useCart();
    console.log("Cart items in page:", cartItems);
    console.log("CartContext in CartPage:", useCart());
    if (!cartItems.length) {
        return (
            <div className="max-w-2xl mx-auto my-20 p-6 bg-white dark:bg-[#1E293B] rounded-lg text-center shadow">
                <img
                    src="https://cdn.iconscout.com/icon/free/png-256/shopping-cart-452-1163339.png"
                    alt="Empty Cart"
                    className="w-32 h-32 mx-auto mb-4"
                />
                <h2 className="text-2xl font-bold mb-2 text-[#6CA0A3]">Your cart is empty</h2>
                <p className="mb-6">Start shopping and add some stylish outfits!</p>
                <Link
                    to="/products"
                    className="px-4 py-2 bg-[#6CA0A3] hover:bg-[#7BB0B0] text-white rounded font-semibold"
                >
                    Shop Now
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Cart items */}
            <section className="md:col-span-2">
                <h1 className="text-2xl font-bold mb-5">Shopping Cart ({cartItems.length} items)</h1>
                {cartItems.map((item, idx) => (
                    <CartItem2 key={idx} item={item} index={idx}/>
                ))}
                <div className="mt-6">
                    <Link
                        to="/products"
                        className="text-[#6CA0A3] hover:text-[#7DD3FC] underline"
                    >
                        &larr; Continue Shopping
                    </Link>
                </div>
            </section>
            {/* Price summary */}
            <CartSummary/>
        </div>
    );
}
