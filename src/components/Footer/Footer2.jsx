import React from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

export default function Footer2() {
    return (
        <footer className="bg-[#F4F6F8] dark:bg-[#1E293B] text-[#4A4A4A] dark:text-[#F1F5F9] pt-10 pb-6 px-6 mt-16 font-poppins border-t border-[#e4e9ef] dark:border-[#243047] transition-colors duration-500">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                {/* Brand + Newsletter */}
                <div>
                    <div className="mb-4">
                        <a
                            href="/"
                            className="text-3xl font-dancingScript text-[#6CA0A3] dark:text-[#7DD3FC] hover:text-[#7BB0B0] dark:hover:text-[#a5d8ff] transition-colors duration-300"
                            style={{ fontFamily: "'Dancing Script', cursive" }}
                        >
                            Empawar
                        </a>
                    </div>
                    <p className="text-base mb-3">
                        Sign up for updates, offers &amp; new arrivals!
                    </p>
                    <form className="flex items-center w-full max-w-xs">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-grow px-3 py-2 rounded-l-md border border-[#d6dde6] dark:border-[#243047] outline-none text-sm bg-white dark:bg-[#2e3748] text-[#4A4A4A] dark:text-[#F1F5F9] transition-colors focus:border-[#6CA0A3] dark:focus:border-[#7DD3FC]"
                            required
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#6CA0A3] dark:bg-[#7DD3FC] hover:bg-[#7BB0B0] dark:hover:bg-[#4dc1e1] text-white dark:text-[#1E293B] rounded-r-md font-medium text-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-[#FFBC9A] dark:focus-visible:ring-[#FBBF24]"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-base">
                        <li><a href="/" className="hover:text-[#6CA0A3] dark:hover:text-[#7DD3FC] transition-colors">Home</a></li>
                        <li><a href="/shop" className="hover:text-[#6CA0A3] dark:hover:text-[#7DD3FC] transition-colors">Shop</a></li>
                        <li><a href="/about" className="hover:text-[#6CA0A3] dark:hover:text-[#7DD3FC] transition-colors">About Us</a></li>
                        <li><a href="/contact" className="hover:text-[#6CA0A3] dark:hover:text-[#7DD3FC] transition-colors">Contact</a></li>
                        <li><a href="/faq" className="hover:text-[#6CA0A3] dark:hover:text-[#7DD3FC] transition-colors">FAQ</a></li>
                        <li><a href="/returns" className="hover:text-[#6CA0A3] dark:hover:text-[#7DD3FC] transition-colors">Returns &amp; Shipping</a></li>
                    </ul>
                </div>
                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-base">
                        <li className="flex items-center">
                            <MailIcon className="h-5 w-5 mr-2 text-[#6CA0A3] dark:text-[#7DD3FC] transition-colors" />
                            <a href="mailto:support@empawar.com" className="hover:text-[#6CA0A3] dark:hover:text-[#7DD3FC] transition-colors">support@empawar.com</a>
                        </li>
                        <li className="flex items-center">
                            <PhoneIcon className="h-5 w-5 mr-2 text-[#6CA0A3] dark:text-[#7DD3FC] transition-colors" />
                            <a href="tel:+1234567890" className="hover:text-[#6CA0A3] dark:hover:text-[#7DD3FC] transition-colors">+1 234 567 890</a>
                        </li>
                        <li>
                            <a href="/help" className="hover:text-[#6CA0A3] dark:hover:text-[#7DD3FC] transition-colors">Help Center</a>
                        </li>
                    </ul>
                </div>
                {/* Social & Legal */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
                    <div className="flex space-x-3 mb-4">
                        {[{
                            icon: FaFacebookF,
                            href: 'https://facebook.com/',
                            label: 'Facebook'
                        }, {
                            icon: FaInstagram,
                            href: 'https://instagram.com/',
                            label: 'Instagram'
                        }, {
                            icon: FaTwitter,
                            href: 'https://twitter.com/',
                            label: 'TwitterX'
                        }, {
                            icon: FaPinterestP,
                            href: 'https://pinterest.com/',
                            label: 'Pinterest'
                        }].map(({ icon: Icon, href, label }, i) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white dark:bg-[#243047] hover:bg-[#6CA0A3] dark:hover:bg-[#7DD3FC] transition-colors duration-300 shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#FFBC9A] dark:focus-visible:ring-[#FBBF24] hover:scale-110 active:scale-95"
                                style={{ display: 'inline-flex' }}
                            >
                                <Icon className="h-5 w-5 text-[#6CA0A3] dark:text-[#7DD3FC] hover:text-white dark:hover:text-[#1E293B] transition-colors duration-300" />
                            </a>
                        ))}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Legal</h3>
                    <ul className="space-y-2 text-base">
                        <li><a href="/privacy" className="hover:text-[#6CA0A3] dark:hover:text-[#7DD3FC] transition-colors">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-[#6CA0A3] dark:hover:text-[#7DD3FC] transition-colors">Terms of Service</a></li>
                        <li><a href="/cookies" className="hover:text-[#6CA0A3] dark:hover:text-[#7DD3FC] transition-colors">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-[#e4e9ef] dark:border-[#243047] pt-6 text-center text-sm text-[#6CA0A3] dark:text-[#7DD3FC] transition-colors duration-500">
                <div>© 2025 Empawar. All rights reserved.</div>
                <div className="mt-1 text-[#4A4A4A] dark:text-[#F1F5F9] transition-colors">
                    <span aria-label="heart" role="img">❤️</span> Crafted with care by the Manu & Team
                </div>
            </div>
        </footer>
    );
}
