import React, { createContext, useContext, useState } from "react";

// CartContext
const CartContext = createContext();

export function CartProvider({ children }) {
    // Each item: { product, quantity, selectedSize, selectedColor }
    const [cartItems, setCartItems] = useState([]);

    // Add an item (if already in cart, merges quantity)
    const addToCart = (item) => {
        setCartItems((prev) => {
            const existing = prev.find(
                (cartItem) =>
                    cartItem.product.id === item.product.id &&
                    cartItem.selectedSize === item.selectedSize &&
                    cartItem.selectedColor === item.selectedColor
            );
            if (existing) {
                return prev.map((cartItem) =>
                    cartItem === existing
                        ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                        : cartItem
                );
            } else {
                return [...prev, item];
            }
        });
    };

    // Remove item completely
    const removeFromCart = (index) => {
        setCartItems((prev) => prev.filter((_, i) => i !== index));
    };

    // Update quantity of existing cart item
    const updateQuantity = (index, quantity) => {
        setCartItems((prev) =>
            prev.map((item, i) => (i === index ? { ...item, quantity } : item))
        );
    };

    // Clear the cart
    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// Custom hook for easy access
export function useCart() {
    return useContext(CartContext);
}
