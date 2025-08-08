import React, { useState, useEffect, useRef } from 'react';
import {
    MenuIcon,
    XIcon,
    SearchIcon,
    ShoppingCartIcon,
    UserIcon,
    HeartIcon,
    LogoutIcon,
    SunIcon,
    MoonIcon,
} from '@heroicons/react/outline';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated auth state
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [theme, setTheme] = useState('light'); // 'light' or 'dark'
    const searchContainerRef = useRef(null);
    const cartItemCount = 3; // example cart count

    // Initialize theme from localStorage or system preference on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (
            savedTheme === 'dark' ||
            (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setTheme('dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Apply or remove `.dark` class on html element and save theme on change
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    // Toggle theme between light and dark
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };

    // Close search if click outside search container
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                searchContainerRef.current &&
                !searchContainerRef.current.contains(event.target)
            ) {
                setSearchOpen(false);
                setSearchQuery('');
            }
        }
        if (searchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [searchOpen]);

    // Support keyboard (Enter to search, Escape to close)
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                setSearchOpen(false);
                setSearchQuery('');
            }
            if (e.key === 'Enter' && searchOpen) {
                e.preventDefault();
                if (searchQuery.trim()) {
                    console.log('Searching for:', searchQuery.trim());
                    setSearchOpen(false);
                    setSearchQuery('');
                    setMenuOpen(false);
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [searchOpen, searchQuery]);

    // Focus search input when opened
    useEffect(() => {
        if (searchOpen && searchContainerRef.current) {
            const input = searchContainerRef.current.querySelector('input');
            input?.focus();
        }
    }, [searchOpen]);

    return (
        <header className="sticky top-0 z-50 bg-[#FAFAFA] dark:bg-[#1E293B] text-[#4A4A4A] dark:text-[#F1F5F9] shadow-sm font-poppins select-none transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:py-5">
                {/* Logo */}
                <a
                    href="/"
                    className="text-4xl font-dancingScript text-[#6CA0A3] dark:text-[#7DD3FC] hover:text-[#7BB0B0] dark:hover:text-[#a5d8ff] transition-colors duration-300"
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                    Empawar
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-10 font-semibold text-lg items-center " style={{ fontFamily: "'Playfair Display', serif" }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-[#6CA0A3] dark:hover:text-[#a5d8ff] transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Search Icon + Input wrapper */}
                    <div ref={searchContainerRef} className="flex items-center ml-4 relative">
                        <button
                            aria-label="Toggle Search"
                            className={`p-2 rounded-md transition-colors duration-300 ${
                                searchOpen ? 'bg-[#FAD4C0] dark:bg-[#FBBF24]' : 'hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24]'
                            }`}
                            onClick={() => setSearchOpen((prev) => !prev)}
                            type="button"
                        >
                            <SearchIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]" />
                        </button>

                        {searchOpen && (
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="ml-2 px-3 py-1 rounded-md border border-[#6CA0A3] dark:border-[#7DD3FC] bg-white dark:bg-[#2e3748] text-[#4A4A4A] dark:text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#FFBC9A] dark:focus:ring-[#FBBF24] transition-width duration-300 font-normal"
                                style={{ width: '200px' }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && searchQuery.trim()) {
                                        e.preventDefault();
                                        console.log('Searching for:', searchQuery.trim());
                                        setSearchOpen(false);
                                        setSearchQuery('');
                                    }
                                    if (e.key === 'Escape') {
                                        setSearchOpen(false);
                                        setSearchQuery('');
                                    }
                                }}
                                aria-label="Search products"
                                autoFocus
                            />
                        )}
                    </div>
                </nav>

                {/* Right Side Icons and CTAs */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle Dark/Light Mode"
                        className="p-2 rounded-md hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition-colors duration-300"
                        type="button"
                    >
                        {theme === 'light' ? (
                            <MoonIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]" />
                        ) : (
                            <SunIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]" />
                        )}
                    </button>

                    {/* Wishlist */}
                    <button
                        aria-label="Wishlist"
                        className="p-2 rounded-md hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition-colors duration-300"
                        type="button"
                    >
                        <HeartIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]" />
                    </button>

                    {/* Cart with badge */}
                    <a
                        href="/cart"
                        className="relative p-2 rounded-md hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition-colors duration-300"
                        aria-label="Cart"
                    >
                        <ShoppingCartIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]" />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-1 -right-2 bg-[#FFBC9A] text-[#4A4A4A] font-bold text-xs rounded-full px-2 dark:bg-[#FBBF24] dark:text-[#1E293B]">
                {cartItemCount}
              </span>
                        )}
                    </a>

                    {/* Auth Buttons (auto switching based on login state) */}
                    {isLoggedIn ? (
                        <>
                            <a
                                href="/account"
                                className="flex items-center space-x-2 text-[#6CA0A3] dark:text-[#7DD3FC] hover:text-[#FFBC9A] dark:hover:text-[#FBBF24] font-semibold transition-colors duration-300"
                            >
                                <UserIcon className="h-5 w-5" />
                                <span>My Account</span>
                            </a>
                            <button
                                onClick={() => setIsLoggedIn(false)}
                                className="flex items-center space-x-2 text-[#6CA0A3] dark:text-[#7DD3FC] hover:text-[#FFBC9A] dark:hover:text-[#FBBF24] font-semibold transition-colors duration-300"
                                aria-label="Logout"
                                type="button"
                            >
                                <LogoutIcon className="h-5 w-5" />
                                <span>Logout</span>
                            </button>
                        </>
                    ) : (
                        <a
                            href="/signup"
                            className="flex items-center space-x-2 bg-[#FFBC9A] dark:bg-[#FBBF24] text-[#4A4A4A] dark:text-[#1E293B] px-4 py-1.5 rounded-md font-semibold hover:bg-[#e6a98c] dark:hover:bg-[#d4a30f] transition-colors duration-300"
                        >
                            <UserIcon className="h-5 w-5" />
                            <span>Sign Up</span>
                        </a>
                    )}
                </div>

                {/* Mobile menu toggles */}
                <div className="md:hidden flex items-center space-x-2">
                    {/* Search toggle */}
                    <button
                        aria-label="Toggle Search"
                        className="p-2 rounded-md hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition-colors duration-300"
                        onClick={() => setSearchOpen((prev) => !prev)}
                        type="button"
                    >
                        <SearchIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]" />
                    </button>

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle Dark/Light Mode"
                        className="p-2 rounded-md hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition-colors duration-300"
                        type="button"
                    >
                        {theme === 'light' ? (
                            <MoonIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]" />
                        ) : (
                            <SunIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]" />
                        )}
                    </button>

                    {/* Hamburger menu */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                        className="p-2 rounded-md hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition-colors duration-300"
                        type="button"
                    >
                        {menuOpen ? (
                            <XIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]" />
                        ) : (
                            <MenuIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile search input */}
            {searchOpen && (
                <div
                    ref={searchContainerRef}
                    className="md:hidden px-6 pb-4 bg-[#FAFAFA] dark:bg-[#1E293B]"
                >
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
                        className="w-full px-4 py-2 rounded-md border border-[#6CA0A3] dark:border-[#7DD3FC] bg-white dark:bg-[#2e3748] text-[#4A4A4A] dark:text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#FFBC9A] dark:focus:ring-[#FBBF24] transition-colors font-normal"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && searchQuery.trim()) {
                                e.preventDefault();
                                console.log('Searching for:', searchQuery.trim());
                                setSearchOpen(false);
                                setSearchQuery('');
                                setMenuOpen(false);
                            }
                            if (e.key === 'Escape') {
                                setSearchOpen(false);
                                setSearchQuery('');
                            }
                        }}
                        aria-label="Search products"
                    />
                </div>
            )}

            {/* Mobile menu */}
            {menuOpen && (
                <nav className="md:hidden bg-[#FAFAFA] dark:bg-[#1E293B] px-6 pb-6 space-y-4 font-semibold text-[#6CA0A3] dark:text-[#7DD3FC]">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block hover:text-[#FFBC9A] dark:hover:text-[#FBBF24] transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Cart mobile */}
                    <a
                        href="/cart"
                        className="flex items-center space-x-2 hover:text-[#FFBC9A] dark:hover:text-[#FBBF24] transition-colors duration-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        <ShoppingCartIcon className="h-6 w-6" />
                        <span>Cart ({cartItemCount})</span>
                    </a>

                    {/* Auth mobile */}
                    {isLoggedIn ? (
                        <>
                            <a
                                href="/account"
                                className="flex items-center space-x-2 hover:text-[#FFBC9A] dark:hover:text-[#FBBF24] transition-colors duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                <UserIcon className="h-6 w-6" />
                                <span>My Account</span>
                            </a>
                            <button
                                onClick={() => {
                                    setIsLoggedIn(false);
                                    setMenuOpen(false);
                                }}
                                className="flex items-center space-x-2 hover:text-[#FFBC9A] dark:hover:text-[#FBBF24] transition-colors duration-300"
                            >
                                <LogoutIcon className="h-6 w-6" />
                                <span>Logout</span>
                            </button>
                        </>
                    ) : (
                        <a
                            href="/signup"
                            className="flex items-center space-x-2 bg-[#FFBC9A] dark:bg-[#FBBF24] text-[#4A4A4A] dark:text-[#1E293B] px-4 py-1.5 rounded-md hover:bg-[#e6a98c] dark:hover:bg-[#d4a30f] transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            <UserIcon className="h-6 w-6" />
                            <span>Sign Up</span>
                        </a>
                    )}
                </nav>
            )}
        </header>
    );
}
