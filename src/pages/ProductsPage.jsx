import React from 'react';
import productsData from '../data/products';
import { useSearch } from '../contexts/SearchContext';
import ProductGrid from "../components/ProductsList/ProductGrid.jsx";

export default function ProductsPage() {
    const { searchQuery } = useSearch();

    const filteredProducts = productsData.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-2xl font-poppins font-semibold mb-6">Products</h1>
            <ProductGrid products={filteredProducts} />
        </div>
    );
}
