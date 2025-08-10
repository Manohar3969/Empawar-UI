import React from "react";

const categories = ["Men", "Women", "Kids", "Accessories"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const colors = [
    {name: "Red", value: "#FF0000"},
    {name: "Blue", value: "#007AFF"},
    {name: "Black", value: "#232323"},
    {name: "Green", value: "#13B432"},
];

export default function FiltersSidebar({filters, onChange, onClear}) {
    return (
        <aside className="w-64 px-4 py-8 bg-white dark:bg-[#1E293B] border-r border-gray-200">
            {/* Categories */}
            <div className="mb-8">
                <h3 className="font-semibold mb-2 text-[#6CA0A3]">Category</h3>
                <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`px-3 py-1 rounded-full border ${filters.category.includes(cat) ? "bg-[#6CA0A3] text-white" : ""}`}
                            onClick={() =>
                                onChange(
                                    "category",
                                    filters.category.includes(cat)
                                        ? filters.category.filter(c => c !== cat)
                                        : [...filters.category, cat]
                                )
                            }
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
            {/* Price Range */}
            <div className="mb-8">
                <h3 className="font-semibold mb-2 text-[#6CA0A3]">Price</h3>
                <div className="flex gap-2 items-center">
                    <input
                        type="number"
                        min={0}
                        max={5000}
                        value={filters.priceRange[0]}
                        onChange={e =>
                            onChange("priceRange", [
                                Number(e.target.value),
                                filters.priceRange[1],
                            ])
                        }
                        className="w-20 px-2 py-1 border rounded"
                        placeholder="Min"
                    />
                    <span>—</span>
                    <input
                        type="number"
                        min={0}
                        max={10000}
                        value={filters.priceRange[1]}
                        onChange={e =>
                            onChange("priceRange", [
                                filters.priceRange[0],
                                Number(e.target.value)
                            ])
                        }
                        className="w-20 px-2 py-1 border rounded"
                        placeholder="Max"
                    />
                </div>
            </div>
            {/* Size */}
            <div className="mb-8">
                <h3 className="font-semibold mb-2 text-[#6CA0A3]">Size</h3>
                <div className="flex flex-wrap gap-2">
                    {sizes.map(size => (
                        <button
                            key={size}
                            className={`px-3 py-1 rounded-full border ${filters.size.includes(size) ? "bg-[#6CA0A3] text-white" : ""}`}
                            onClick={() =>
                                onChange(
                                    "size",
                                    filters.size.includes(size)
                                        ? filters.size.filter(s => s !== size)
                                        : [...filters.size, size]
                                )
                            }
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
            {/* Color */}
            <div className="mb-8">
                <h3 className="font-semibold mb-2 text-[#6CA0A3]">Color</h3>
                <div className="flex gap-3">
                    {colors.map(c => (
                        <button
                            key={c.value}
                            className={`w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center ${filters.color.includes(c.value) ? "ring-2 ring-[#6CA0A3]" : ""}`}
                            style={{backgroundColor: c.value}}
                            title={c.name}
                            onClick={() =>
                                onChange(
                                    "color",
                                    filters.color.includes(c.value)
                                        ? filters.color.filter(col => col !== c.value)
                                        : [...filters.color, c.value]
                                )
                            }
                        >
                            {filters.color.includes(c.value) && (
                                <span className="text-white font-bold">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
            {/* In Stock toggle */}
            <div className="mb-8 flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={e => onChange("inStock", e.target.checked)}
                    id="inStockCheck"
                />
                <label htmlFor="inStockCheck" className="text-sm">In Stock Only</label>
            </div>
            {/* Clear All */}
            <button
                className="bg-gray-200 px-3 py-1 rounded w-full font-semibold mt-4"
                onClick={onClear}
            >
                Clear Filters
            </button>
        </aside>
    );
}
