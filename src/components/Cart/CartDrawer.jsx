// src/components/CartDrawer.jsx
import React from 'react';

import CartDrawerItem from './CartDrawerItem';
import { XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import {useCart} from "../../contexts/CartContext.jsx";

export default function CartDrawer({ isOpen, onClose }) {
    const { cartItems } = useCart();

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity, 0
    );

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white dark:bg-[#1E293B] shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
                    <h2 className="text-lg font-semibold">My Cart ({cartItems.length})</h2>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-[#243047] rounded">
                        <XIcon className="h-5 w-5" />
                    </button>
                </div>

                {/* Items */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {cartItems.length > 0 ? (
                        cartItems.map((item, idx) => (
                            <CartDrawerItem key={idx} item={item} index={idx} />
                        ))
                    ) : (
                        <p className="text-center mt-10 text-gray-500">Your cart is empty.</p>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                        <div className="flex justify-between font-semibold mb-4">
                            <span>Subtotal</span>
                            <span>₹{subtotal}</span>
                        </div>
                        <Link
                            to="/cart"
                            onClick={onClose}
                            className="block w-full text-center py-2 bg-gray-200 hover:bg-gray-300 rounded mb-2"
                        >
                            View Cart
                        </Link>
                        <Link
                            to="/checkout"
                            onClick={onClose}
                            className="block w-full text-center py-2 bg-[#6CA0A3] hover:bg-[#7BB0B0] text-white rounded"
                        >
                            Checkout
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
