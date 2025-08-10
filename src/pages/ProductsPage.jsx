// src/pages/ProductsPage.jsx
import React, {useState, useMemo} from 'react';
import products from '../data/products';
import {useSearch} from '../contexts/SearchContext';
import FiltersSidebar from "../components/ProductsList/FiltersSidebar.jsx";
import ProductGrid from "../components/ProductsList/ProductGrid.jsx";
import MobileFiltersDrawer from "../components/ProductsList/MobileFiltersDrawer.jsx";
import FilterTag from "../components/ProductsList/FilterTag.jsx";

export default function ProductsPage() {
    // Get live search query from context
    const {searchQuery} = useSearch();

    // Filter state for all fields
    const [filters, setFilters] = useState({
        category: [],
        priceRange: [0, 5000],
        size: [],
        color: [],
        inStock: true
    });

    // State for showing mobile filter drawer
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    // When user changes any filter
    const handleFilterChange = (type, value) => {
        setFilters(prev => ({...prev, [type]: value}));
    };

    // Remove a particular filter tag
    const handleRemoveTag = (type, value) => {
        setFilters(prev => ({
            ...prev,
            [type]: prev[type].filter(item => item !== value)
        }));
    };

    // Reset all filters
    const handleClearAll = () => {
        setFilters({
            category: [],
            priceRange: [0, 5000],
            size: [],
            color: [],
            inStock: true
        });
    };

    // Main filtering logic (search + all filters)
    const filteredProducts = useMemo(() => {
        return products.filter((prod) => {
            // Search filter
            if (
                searchQuery &&
                !prod.name.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
                return false;
            }
            // Category filter
            if (filters.category.length && !filters.category.includes(prod.category)) {
                return false;
            }
            // Price filter
            if (
                prod.price < filters.priceRange[0] ||
                prod.price > filters.priceRange[1]
            ) {
                return false;
            }
            // Size filter (supports object format)
            if (
                filters.size.length &&
                !filters.size.some((size) =>
                    prod.sizes?.some(
                        (s) => s.available && s.label.toLowerCase() === size.toLowerCase()
                    )
                )
            ) {
                return false;
            }
            // Color filter
            if (
                filters.color.length &&
                !filters.color.some((color) =>
                    prod.colors?.some((c) => c.value === color)
                )
            ) {
                return false;
            }
            // In-stock filter
            if (filters.inStock && prod.stock <= 0) {
                return false;
            }
            return true;
        });
    }, [products, filters, searchQuery]);

    return (
        <div className="flex max-w-7xl mx-auto">
            {/* Desktop Sidebar: only visible on md+ screens */}
            <div className="hidden md:block">
                <FiltersSidebar
                    filters={filters}
                    onChange={handleFilterChange}
                    onClear={handleClearAll}
                />
            </div>

            {/* Main content */}
            <div className="flex-1 px-4 py-8">
                {/* Mobile Filters Button (hidden on md+) */}
                <div className="mb-4 flex justify-between items-center md:hidden">
                    <button
                        onClick={() => setMobileFiltersOpen(true)}
                        className="px-4 py-2 bg-[#6CA0A3] text-white font-semibold rounded"
                    >
                        Filters
                    </button>
                    {/* Optional: Place a Sort button here as needed */}
                </div>

                {/* Active filter tags and clear button */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {/* Render tags for all filter array properties */}
                    {Object.entries(filters).map(([type, value]) =>
                        Array.isArray(value)
                            ? value.map(v => (
                                <FilterTag key={type + v} type={type} value={v} onRemove={handleRemoveTag}/>
                            ))
                            : null
                    )}
                    <button
                        className="bg-gray-200 px-2 py-1 rounded text-sm"
                        onClick={handleClearAll}
                    >
                        Clear All
                    </button>
                </div>

                {/* Products grid */}
                <ProductGrid products={filteredProducts}/>
            </div>

            {/* Mobile Filters Drawer */}
            <MobileFiltersDrawer
                isOpen={mobileFiltersOpen}
                onClose={() => setMobileFiltersOpen(false)}
                filters={filters}
                onChange={handleFilterChange}
                onClear={handleClearAll}
            />
        </div>
    );
}