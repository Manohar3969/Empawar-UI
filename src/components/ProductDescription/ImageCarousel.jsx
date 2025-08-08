import React, { useState, useRef } from 'react';

export default function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Navigation handlers
    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    const goToPrev = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    // Dots navigation
    const goToIndex = (i) => setCurrentIndex(i);

    // Touch swipe support for mobile
    const startX = useRef(0);

    const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
    const onTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        if (startX.current - endX > 50) goToNext();
        else if (endX - startX.current > 50) goToPrev();
    };

    return (
        <div
            className="relative w-full max-w-lg mx-auto"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            tabIndex={0}
            aria-label="Product Images Carousel"
            role="region"
        >
            <div className="relative overflow-hidden rounded-lg">
                <img
                    src={images[currentIndex]}
                    alt={`Product Image ${currentIndex + 1}`}
                    className="w-full h-96 object-cover object-top transition-all duration-700 ease-in-out"
                    loading="lazy"
                    draggable="false"
                />
            </div>

            {/* Prev arrow */}
            <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous image"
                className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75 rounded-full p-2 shadow hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#6CA0A3]"
                style={{ zIndex: 2 }} // Ensure above image
            >
                <svg className="w-6 h-6 text-[#6CA0A3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Next arrow */}
            <button
                type="button"
                onClick={goToNext}
                aria-label="Next image"
                className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75 rounded-full p-2 shadow hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#6CA0A3]"
                style={{ zIndex: 2 }}
            >
                <svg className="w-6 h-6 text-[#6CA0A3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-4">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        type="button"
                        onClick={() => goToIndex(idx)}
                        aria-label={`Go to image ${idx + 1}`}
                        className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-[#6CA0A3]' : 'bg-gray-300 dark:bg-gray-600'}`}
                    />
                ))}
            </div>
        </div>
    );
}
