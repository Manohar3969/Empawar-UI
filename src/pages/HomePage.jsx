import React from "react";


// Optionally import product data for carousels
import products from "../data/Products.js";
import HeroBanner from "../components/HomePage/HeroBanner.jsx";
import CategorySection from "../components/HomePage/CategorySection.jsx";
import ProductCarousel from "../components/HomePage/ProductCarousel.jsx";
import PromoSection from "../components/HomePage/PromoSection.jsx";
import BrandValues from "../components/HomePage/BrandValues.jsx";
import Testimonials from "../components/HomePage/Testimonials.jsx";
import NewsletterSignup from "../components/HomePage/NewsletterSignup.jsx";

export default function HomePage() {
    // For demo, filter bestsellers/new arrivals
    const newArrivals = products.slice(0, 5);         // Use updated logic in real app
    const bestSellers = products.slice(5, 10);

    // Featured categories (customize as needed)
    const categories = [
        {
            name: "Men",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6shPW2FGSZhwL2V1fEHOftYrKtDkG44tiGQ&s"
        },
        {
            name: "Women",
            image: "https://images-static.nykaa.com/media/catalog/product/7/4/74f044dDDR011848_5.jpg?tr=w-500"
        },
        {
            name: "Kids",
            image: "https://5.imimg.com/data5/SELLER/Default/2024/7/439411470/UM/YL/JA/8647031/whatsapp-image-2024-07-31-at-21-46-46-3-500x500.jpeg"
        },
        {
            name: "Accessories",
            image: "https://thumbs.dreamstime.com/b/luxurious-fashion-accessories-jewelry-arrangement-sophisticated-collection-including-handbags-shoes-sunglasses-elegant-322373255.jpg"
        }
    ];

    return (
        <div>
            <HeroBanner/>
            <CategorySection categories={categories}/>
            <ProductCarousel title="New Arrivals" products={newArrivals}/>
            <PromoSection/>
            <ProductCarousel title="Best Sellers" products={bestSellers}/>
            <BrandValues/>
            <Testimonials/>
            <NewsletterSignup/>
        </div>
    );
}
