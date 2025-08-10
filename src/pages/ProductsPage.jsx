// src/pages/ProductsPage.jsx
import React, {useState, useMemo} from 'react';
import products from '../data/products';
import {useSearch} from '../contexts/SearchContext';
import FiltersSidebar from "../components/ProductsList/FiltersSidebar.jsx";
import ProductGrid from "../components/ProductsList/ProductGrid.jsx";
import MobileFiltersDrawer from "../components/ProductsList/MobileFiltersDrawer.jsx";
import FilterTag from "../components/ProductsList/FilterTag.jsx";

export default function ProductsPage() {
    const {searchQuery} = useSearch();

    const [filters, setFilters] = useState({
        category: [],
        priceRange: [0, 5000],
        size: [],
        color: [],
        inStock: true
    });

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false); // NEW

    const handleFilterChange = (type, value) => {
        setFilters(prev => ({...prev, [type]: value}));
    };

    const handleRemoveTag = (type, value) => {
        setFilters(prev => ({
            ...prev,
            [type]: prev[type].filter(item => item !== value)
        }));
    };

    const handleClearAll = () => {
        setFilters({
            category: [],
            priceRange: [0, 5000],
            size: [],
            color: [],
            inStock: true
        });
    };

    const filteredProducts = useMemo(() => {
        return products.filter((prod) => {
            // Search check
            if (
                searchQuery &&
                !prod.name.toLowerCase().includes(searchQuery.toLowerCase())
            ) return false;

            // Category check
            if (filters.category.length && !filters.category.includes(prod.category)) return false;

            // Price check
            if (prod.price < filters.priceRange[0] || prod.price > filters.priceRange[1]) return false;

            // Size check
            if (
                filters.size.length &&
                !filters.size.some(size =>
                    prod.sizes?.some(
                        s => s.available && s.label.toLowerCase() === size.toLowerCase()
                    )
                )
            ) return false;

            // Color check
            if (
                filters.color.length &&
                !filters.color.some(color =>
                    prod.colors?.some(c => c.value === color)
                )
            ) return false;

            // Stock check
            if (filters.inStock && prod.stock <= 0) return false;

            return true;
        });
    }, [products, filters, searchQuery]);

    return (
        <div className="flex max-w-7xl mx-auto">
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
                <FiltersSidebar
                    filters={filters}
                    onChange={handleFilterChange}
                    onClear={handleClearAll}
                />
            </div>

            <div className="flex-1 px-4 py-8">
                {/* Mobile Filter Button */}
                <div className="mb-4 flex justify-between items-center md:hidden">
                    <button
                        onClick={() => setMobileFiltersOpen(true)}
                        className="px-4 py-2 bg-[#6CA0A3] text-white font-semibold rounded"
                    >
                        Filters
                    </button>
                    {/* (Optional) Sort button can go here */}
                </div>

                {/* Active filter tags */}
                <div className="mb-4 flex flex-wrap gap-2">
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
