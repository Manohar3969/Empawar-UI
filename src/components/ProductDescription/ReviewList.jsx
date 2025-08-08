// src/components/ReviewList.jsx
import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

export default function ReviewList({ reviews }) {
    if (!reviews?.length) return <div className="text-gray-500">No reviews yet.</div>;
    return (
        <div className="space-y-4 mt-4">
            {reviews.map((r, idx) => (
                <div key={idx} className="p-3 rounded bg-[#f9f9f9] dark:bg-[#243047]">
                    <div className="flex items-center space-x-2">
                        <span className="font-bold">{r.user}</span>
                        <div className="flex">{[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-4 w-4 ${i < r.rating ? "text-yellow-400" : "text-gray-300"}`} />)}</div>
                        <span className="text-xs text-gray-400">{r.date}</span>
                    </div>
                    <div className="mt-1">{r.text}</div>
                </div>
            ))}
        </div>
    );
}
