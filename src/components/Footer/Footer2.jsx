import React from 'react';
import {
    MailIcon,
    PhoneIcon,
} from '@heroicons/react/outline';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaPinterestP,
} from 'react-icons/fa';

export default function Footer2() {
    return (
        <footer className="bg-[#F4F6F8] text-[#4A4A4A] pt-10 pb-6 px-6 mt-16 font-poppins border-t border-[#e4e9ef]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                {/* Brand + Newsletter */}
                <div>
                    <div className="mb-4">
                        <a
                            href="/"
                            className="text-3xl font-dancingScript text-[#6CA0A3] hover:text-[#7BB0B0] transition-colors duration-300"
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
                            className="flex-grow px-3 py-2 rounded-l-md border border-[#d6dde6] outline-none text-sm bg-white focus:border-[#6CA0A3]"
                            required
                        />
                        <button
                            type="submit"
                            className="px-4 py-2 bg-[#6CA0A3] hover:bg-[#7BB0B0] text-white rounded-r-md font-medium text-sm transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-base">
                        <li><a href="/" className="hover:text-[#6CA0A3] transition">Home</a></li>
                        <li><a href="/shop" className="hover:text-[#6CA0A3] transition">Shop</a></li>
                        <li><a href="/about" className="hover:text-[#6CA0A3] transition">About Us</a></li>
                        <li><a href="/contact" className="hover:text-[#6CA0A3] transition">Contact</a></li>
                        <li><a href="/faq" className="hover:text-[#6CA0A3] transition">FAQ</a></li>
                        <li><a href="/returns" className="hover:text-[#6CA0A3] transition">Returns &amp; Shipping</a></li>
                    </ul>
                </div>
                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-base">
                        <li className="flex items-center">
                            <MailIcon className="h-5 w-5 mr-2 text-[#6CA0A3]" />
                            <a href="mailto:support@empawar.com" className="hover:text-[#6CA0A3] transition">support@empawar.com</a>
                        </li>
                        <li className="flex items-center">
                            <PhoneIcon className="h-5 w-5 mr-2 text-[#6CA0A3]" />
                            <a href="tel:+1234567890" className="hover:text-[#6CA0A3] transition">+1 234 567 890</a>
                        </li>
                        <li>
                            <a href="/help" className="hover:text-[#6CA0A3] transition">Help Center</a>
                        </li>
                    </ul>
                </div>
                {/* Social & Legal */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
                    <div className="flex space-x-3 mb-4">
                        <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white hover:bg-[#6CA0A3] transition-colors">
                            <FaFacebookF className="h-5 w-5 text-[#6CA0A3] hover:text-white" />
                        </a>
                        <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white hover:bg-[#6CA0A3] transition-colors">
                            <FaInstagram className="h-5 w-5 text-[#6CA0A3] hover:text-white" />
                        </a>
                        <a href="https://twitter.com/" aria-label="TwitterX" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white hover:bg-[#6CA0A3] transition-colors">
                            <FaTwitter className="h-5 w-5 text-[#6CA0A3] hover:text-white" />
                        </a>
                        <a href="https://pinterest.com/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white hover:bg-[#6CA0A3] transition-colors">
                            <FaPinterestP className="h-5 w-5 text-[#6CA0A3] hover:text-white" />
                        </a>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">Legal</h3>
                    <ul className="space-y-2 text-base">
                        <li><a href="/privacy" className="hover:text-[#6CA0A3] transition">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-[#6CA0A3] transition">Terms of Service</a></li>
                        <li><a href="/cookies" className="hover:text-[#6CA0A3] transition">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-[#e4e9ef] pt-6 text-center text-sm text-[#6CA0A3]">
                <div>© 2025 Empawar. All rights reserved.</div>
                <div className="mt-1 text-[#4A4A4A]"><span aria-label="heart" role="img">❤️</span> Crafted with care by the Manu & Team</div>
            </div>
        </footer>
    );
}
