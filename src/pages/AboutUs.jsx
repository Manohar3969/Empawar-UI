import React from 'react';
import { CheckCircleIcon, HeartIcon, GlobeAltIcon } from '@heroicons/react/outline';
import {useCart} from "../contexts/CartContext.jsx";



export default function AboutUs() {
    console.log("Navigated to About US Page");
    const values = [
        {
            icon: <CheckCircleIcon className="h-10 w-10 text-[#6CA0A3]" />,
            title: 'Quality First',
            desc: 'Premium fabrics and top-class stitching for every order.'
        },
        {
            icon: <HeartIcon className="h-10 w-10 text-[#6CA0A3]" />,
            title: 'Customer Love',
            desc: 'We put our customers at the heart of every decision.'
        },
        {
            icon: <GlobeAltIcon className="h-10 w-10 text-[#6CA0A3]" />,
            title: 'Sustainability',
            desc: 'Eco-responsible sourcing and minimal waste.'
        }
    ];

    const team = [
        {
            name: "Aditi Sharma",
            role: "Founder & Creative Head",
            img: "https://via.placeholder.com/150?text=Aditi"
        },
        {
            name: "Rahul Verma",
            role: "Operations Manager",
            img: "https://via.placeholder.com/150?text=Rahul"
        },
        {
            name: "Priya Das",
            role: "Marketing Lead",
            img: "https://via.placeholder.com/150?text=Priya"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-12 animate-fadeIn">
            {/* Hero Section */}
            <section className="relative mb-16">
                <img
                    src="https://via.placeholder.com/1200x400?text=Our+Story+Banner"
                    alt="Our Story"
                    className="w-full h-64 object-cover rounded-lg shadow"
                />
                <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white bg-black/40 rounded-lg">
                    About Us
                </h1>
            </section>

            {/* Our Story */}
            <section className="mb-16 text-center">
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    Founded in 2020, our journey began with a small workshop and a big dream:
                    to redefine everyday wear for comfort, quality, and sustainability.
                    Today, we proudly serve customers across the country, staying true to our roots.
                </p>
            </section>

            {/* Mission & Values */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center">Our Mission & Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((v, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-[#1E293B] p-6 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <div className="mb-4 flex justify-center">{v.icon}</div>
                            <h3 className="text-lg font-semibold mb-2 text-center">{v.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Meet the Team */}
            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center">Meet the Team</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {team.map((member, idx) => (
                        <div key={idx} className="bg-white dark:bg-[#1E293B] rounded-lg shadow p-4 w-60 hover:scale-105 transition">
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h3 className="font-semibold">{member.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-300">{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
