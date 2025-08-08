// src/pages/ProductDetailsPage.jsx
import React, {useState} from 'react';
import products from "../data/Products.js";
import ImageCarousel from "../components/ProductDescription/ImageCarousel.jsx";


import {HeartIcon, ShoppingCartIcon, ShareIcon, StarIcon} from '@heroicons/react/solid';
import SizeSelector from "../components/ProductDescription/SizeSelector.jsx";
import ColorPicker from "../components/ProductDescription/ColorPicker.jsx";
import QuantitySelector from "../components/ProductDescription/QuantitySelector.jsx";
import ReviewList from "../components/ProductDescription/ReviewList.jsx";
import RecommendedProducts from "../components/ProductDescription/RecommendedProducts.jsx";

// Simulate getting product by ID (for demo, just use first one)
const product = products[0];

export default function ProductDetailsPage() {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.label);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]?.value);
    const [quantity, setQuantity] = useState(1);
    const [isFav, setIsFav] = useState(product.isFavorite);

    // Get current images based on color selection (optional)
    const currentColorObj = product.colors.find(c => c.value === selectedColor);
    const images = currentColorObj?.image ? [currentColorObj.image] : product.images;

    // Simulate recommended products by ID
    const recommended = products.filter(p =>
        product.relatedProductIds?.includes(p.id)
    );

    return (
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product images */}
            <ImageCarousel images={images}/>

            {/* Product Info */}
            <div>
                <h1 className="text-2xl font-bold font-poppins mb-1 flex items-center">
                    {product.name}
                    {product.badge && (
                        <span
                            className="ml-3 px-2 py-1 rounded bg-[#6CA0A3] text-white text-xs uppercase">{product.badge}</span>
                    )}
                </h1>
                <div className="flex items-center space-x-2 mb-1">
          <span className="text-[#6CA0A3] dark:text-[#7DD3FC] font-bold text-xl">
            ₹{product.price}
          </span>
                    {product.originalPrice && (
                        <span className="text-gray-500 dark:text-gray-300 line-through text-base">
              ₹{product.originalPrice}
            </span>
                    )}
                    {product.originalPrice && (
                        <span className="text-xs text-[#FBBF24] font-semibold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
            </span>
                    )}
                </div>
                <div className="flex items-center space-x-1 mb-2">
          <span className="text-yellow-400 font-bold">
            {[...Array(5)].map((_, i) => <StarIcon key={i}
                                                   className={`h-5 w-5 inline ${i < Math.round(product.rating) ? "" : "text-gray-300"}`}/>)}
          </span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-300">
            {product.rating} / 5 ({product.reviewCount} reviews)
          </span>
                </div>
                <div className="mb-4 text-base">{product.description}</div>
                <div className="mb-3">
                    <span className="font-semibold">Size:</span>
                    <SizeSelector
                        sizes={product.sizes}
                        selectedSize={selectedSize}
                        onSizeChange={setSelectedSize}
                    />
                </div>
                <div className="mb-3">
                    <span className="font-semibold">Color:</span>
                    <ColorPicker
                        colors={product.colors}
                        selectedColor={selectedColor}
                        onColorChange={setSelectedColor}
                    />
                </div>
                <div className="mb-3">
                    <span className="font-semibold">Quantity:</span>
                    <QuantitySelector value={quantity} setValue={setQuantity} min={1} max={10}/>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                    <button
                        className="flex items-center space-x-1 px-5 py-2 rounded bg-[#6CA0A3] hover:bg-[#7BB0B0] text-white font-semibold transition"
                    >
                        <ShoppingCartIcon className="h-5 w-5"/>
                        <span>Add to Cart</span>
                    </button>
                    <button
                        className={`p-2 rounded-full border transition ${
                            isFav ? 'bg-[#FAD4C0] dark:bg-[#FBBF24]' : 'bg-white dark:bg-[#243047]'
                        }`}
                        onClick={() => setIsFav((f) => !f)}
                        aria-label="Wishlist"
                    >
                        <HeartIcon
                            className={`h-5 w-5 ${isFav ? "text-red-500" : "text-gray-400 dark:text-gray-200"}`}
                        />
                    </button>
                    <button
                        className="p-2 rounded-full border bg-white dark:bg-[#243047] hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition"
                        aria-label="Share"
                        onClick={() => navigator.clipboard.writeText(window.location.href)}
                        title="Copy product link"
                    >
                        <ShareIcon className="h-5 w-5 text-[#6CA0A3]"/>
                    </button>
                </div>
                <div className="mb-4">
                    {product.inStock ? (
                        <span className="text-green-600 font-semibold">In Stock</span>
                    ) : (
                        <span className="text-red-600 font-semibold">Out of Stock</span>
                    )}
                </div>
                <div className="mb-6">
                    <span
                        className="text-gray-500 text-sm">Estimated delivery in 3-5 days • Free shipping over ₹500</span>
                </div>
                {/* Reviews */}
                <ReviewList reviews={product.reviews}/>
            </div>

            {/* Full width below: Recommended products carousel */}
            <div className="md:col-span-2 mt-8">
                <RecommendedProducts products={recommended}/>
            </div>
        </div>
    );
}
