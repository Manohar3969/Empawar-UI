// src/components/MobileFiltersDrawer.jsx
import React from 'react';
import { XIcon } from '@heroicons/react/outline';
import FiltersSidebar from './FiltersSidebar';

export default function MobileFiltersDrawer({ isOpen, onClose, filters, onChange, onClear }) {
    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            ></div>

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white dark:bg-[#1E293B] z-50 transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } flex flex-col`}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-[#243047] rounded">
                        <XIcon className="h-5 w-5" />
                    </button>
                </div>

                {/* Filter controls (scrollable) */}
                <div className="flex-1 overflow-y-auto p-4">
                    <FiltersSidebar
                        filters={filters}
                        onChange={onChange}
                        onClear={onClear}
                    />
                </div>

                {/* Apply button */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                    <button
                        onClick={onClose}
                        className="w-full bg-[#6CA0A3] text-white px-4 py-2 rounded hover:bg-[#7BB0B0] font-semibold"
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </>
    );
}
