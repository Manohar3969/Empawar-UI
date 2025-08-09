import React, {useState} from 'react';
import {HeartIcon, ShoppingCartIcon, StarIcon} from '@heroicons/react/solid';
import {useCart} from "../../contexts/CartContext.jsx";

export default function ProductCard({product}) {
    const [isFav, setIsFav] = useState(product.isFavorite);
    const {addToCart} = useCart();

    const handleAddToCart = () => {
        addToCart({
            product,
            selectedSize: null, // or default size if applicable
            selectedColor: null, // or default color if applicable
            quantity: 1,
        });
        console.log("Adding to cart:", {product, selectedSize, selectedColor, quantity});
    };

    return (
        <div
            className="bg-white dark:bg-[#1E293B] rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-hidden">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                />
                {product.badge && (
                    <span className="absolute top-2 left-2 bg-[#6CA0A3] text-white text-sm px-2 py-1 rounded">
            {product.badge}
          </span>
                )}
                <button
                    onClick={() => setIsFav(!isFav)}
                    className="absolute top-2 right-2 bg-white dark:bg-[#243047] p-1 rounded-full hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition"
                >
                    <HeartIcon
                        className={`h-5 w-5 ${
                            isFav ? 'text-red-500' : 'text-gray-400 dark:text-gray-200'
                        }`}
                    />
                </button>
            </div>
            {/* Product Details */}
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                {/* Price */}
                <div className="flex items-center space-x-2 mb-2">
          <span className="text-[#6CA0A3] dark:text-[#7DD3FC] font-bold">
            ₹{product.price}
          </span>
                    {product.originalPrice && (
                        <span className="text-gray-500 dark:text-gray-300 line-through text-sm">
              ₹{product.originalPrice}
            </span>
                    )}
                </div>
                {/* Rating */}
                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon
                            key={i}
                            className={`h-4 w-4 ${
                                i < Math.round(product.rating)
                                    ? 'text-yellow-400'
                                    : 'text-gray-300 dark:text-gray-500'
                            }`}
                        />
                    ))}
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-300">
            ({product.reviewCount})
          </span>
                </div>
                {/* Colors */}
                {product.colors?.length > 0 && (
                    <div className="flex items-center space-x-2 mb-3">
                        {product.colors.map((color, idx) => (
                            <span
                                key={idx}
                                className="w-5 h-5 rounded-full border border-gray-300"
                                style={{backgroundColor: color}}
                            ></span>
                        ))}
                    </div>
                )}
                {/* Sizes */}
                {product.sizes?.length > 0 && (
                    <div className="flex items-center space-x-2 mb-4">
                        {product.sizes.map((size, idx) => (
                            <span
                                key={idx}
                                className={`px-2 py-1 border rounded text-sm ${
                                    !size.available
                                        ? 'text-gray-400 border-gray-300 line-through'
                                        : 'hover:border-[#6CA0A3] dark:hover:border-[#7DD3FC] cursor-pointer'
                                }`}
                            >
                {size.label}
              </span>
                        ))}
                    </div>
                )}
                {/* Actions */}
                <button
                    className="w-full flex items-center justify-center space-x-2 py-2 bg-[#6CA0A3] hover:bg-[#7BB0B0] text-white rounded transition"
                    onClick={handleAddToCart}>
                    <ShoppingCartIcon className="h-5 w-5"/>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
}
