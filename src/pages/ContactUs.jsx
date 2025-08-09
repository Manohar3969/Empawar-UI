import React, { useState } from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';

export default function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // TODO: Integrate with backend or email service
        setSubmitted(true);
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 animate-fadeIn">
            {/* Hero */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-[#6CA0A3] mb-4">Contact Us</h1>
                <p className="text-gray-600 dark:text-gray-300">
                    We’re here to help. Reach out with any queries or feedback.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">

                {/* Contact Details */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <MailIcon className="h-6 w-6 text-[#6CA0A3]" />
                        <span>support@yourstore.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <PhoneIcon className="h-6 w-6 text-[#6CA0A3]" />
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <LocationMarkerIcon className="h-6 w-6 text-[#6CA0A3]" />
                        <span>123 Fashion Street, Mumbai, India</span>
                    </div>

                    {/* Map */}
                    <div className="mt-6">
                        <iframe
                            title="Store Location"
                            src="https://www.google.com/maps/embed?pb=!1m18..."
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            className="rounded-lg shadow"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border p-2 rounded"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border p-2 rounded"
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={form.subject}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full border p-2 rounded"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-[#6CA0A3] text-white px-4 py-2 rounded font-semibold hover:bg-[#7BB0B0]"
                            >
                                Send Message
                            </button>
                        </form>
                    ) : (
                        <div className="text-green-600 font-semibold">
                            Thank you! We’ve received your message.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
