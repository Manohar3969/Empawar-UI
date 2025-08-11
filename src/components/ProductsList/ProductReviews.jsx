// src/components/ProductReviews.jsx
import React, { useState } from "react";

export default function ProductReviews({ productId }) {
    const [reviews, setReviews] = useState([
        { id: 1, user: "Alice", rating: 5, comment: "Great product!" },
        { id: 2, user: "Bob", rating: 4, comment: "Good value for money." },
    ]);
    const [newReview, setNewReview] = useState({ user: "", rating: 5, comment: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newReview.user || !newReview.comment) return;

        setReviews([
            ...reviews,
            { id: Date.now(), ...newReview }
        ]);
        setNewReview({ user: "", rating: 5, comment: "" });
    };

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>

            <div className="space-y-4">
                {reviews.map((rev) => (
                    <div key={rev.id} className="p-3 border rounded">
                        <p className="font-medium">{rev.user} <span className="text-yellow-500">{"★".repeat(rev.rating)}</span></p>
                        <p className="text-gray-700">{rev.comment}</p>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-6 p-4 border rounded">
                <h3 className="font-semibold mb-2">Write a Review</h3>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={newReview.user}
                    onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
                    className="border p-2 w-full mb-2"
                />
                <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                    className="border p-2 w-full mb-2"
                >
                    {[5,4,3,2,1].map(r => (
                        <option value={r} key={r}>{r} Star{r > 1 ? "s" : ""}</option>
                    ))}
                </select>
                <textarea
                    placeholder="Your Review"
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    className="border p-2 w-full mb-2"
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                    Submit Review
                </button>
            </form>
        </div>
    );
}
