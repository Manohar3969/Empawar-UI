import React, { useState } from "react";

export default function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSignup = e => {
        e.preventDefault();
        setSubmitted(true);
        // Integrate actual newsletter API later
    };

    return (
        <section className="max-w-5xl mx-auto px-6 py-10 text-center">
            <h2 className="text-xl font-bold mb-2">Stay Updated!</h2>
            <p className="mb-4 text-gray-500 dark:text-gray-300">
                Get new arrivals, offers & style tips delivered to your inbox.
            </p>
            {!submitted ? (
                <form onSubmit={handleSignup} className="flex justify-center gap-3">
                    <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                        className="px-3 py-2 border rounded-lg w-60"
                    />
                    <button
                        type="submit"
                        className="px-5 py-2 bg-[#6CA0A3] text-white hover:bg-[#7BB0B0] rounded font-semibold"
                    >
                        Subscribe
                    </button>
                </form>
            ) : (
                <div className="text-green-600 mt-2 font-semibold">
                    Thank you for subscribing!
                </div>
            )}
        </section>
    );
}
