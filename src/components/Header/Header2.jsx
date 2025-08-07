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

export default function Header2() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Demo auth state toggle
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [theme, setTheme] = useState('light'); // Placeholder for theme switch logic

    const searchContainerRef = useRef(null);
    const cartItemCount = 3; // Example cart count

    // Handle clicks outside search container to close search input
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
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

    // Keyboard support: Enter triggers search, Escape closes
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') {
                setSearchOpen(false);
                setSearchQuery('');
            }
            if (e.key === 'Enter' && searchOpen && searchQuery.trim()) {
                e.preventDefault();
                console.log('Searching for:', searchQuery.trim());
                setSearchOpen(false);
                setSearchQuery('');
                setMenuOpen(false);
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [searchOpen, searchQuery]);

    // Focus input when it opens
    useEffect(() => {
        if (searchOpen && searchContainerRef.current) {
            const input = searchContainerRef.current.querySelector('input');
            input?.focus();
        }
    }, [searchOpen]);

    // Theme toggle placeholder - currently toggles light/dark state internally, no effect yet
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };

    return (
        <header className="sticky top-0 z-50 bg-[#FAFAFA] text-[#4A4A4A] shadow-sm font-poppins select-none transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:py-5">
                {/* Logo */}
                <a
                    href="/"
                    className="text-4xl font-dancingScript text-[#6CA0A3] hover:text-[#7BB0B0] transition-colors duration-300"
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                    Empawar
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-10 font-semibold text-lg items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-[#6CA0A3] transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Search Icon + Input wrapper */}
                    <div ref={searchContainerRef} className="flex items-center ml-4 relative">
                        <button
                            aria-label="Toggle Search"
                            className={`p-2 rounded-md transition-colors duration-300 ${
                                searchOpen ? 'bg-[#FAD4C0]' : 'hover:bg-[#FAD4C0]'
                            }`}
                            onClick={() => setSearchOpen((v) => !v)}
                        >
                            <SearchIcon className="h-6 w-6 text-[#6CA0A3]" />
                        </button>
                        {searchOpen && (
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="ml-2 px-3 py-1 rounded-md border border-[#6CA0A3] bg-white text-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#FFBC9A] transition-width duration-300 font-normal"
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

                {/* Right Icons & CTA */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Theme toggle placeholder button */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle Theme (future)"
                        className="p-2 rounded-md hover:bg-[#FAD4C0] transition-colors duration-300"
                        title="Theme switch (not active yet)"
                    >
                        {theme === 'light' ? (
                            <MoonIcon className="h-6 w-6 text-[#6CA0A3]" />
                        ) : (
                            <SunIcon className="h-6 w-6 text-[#6CA0A3]" />
                        )}
                    </button>

                    {/* Wishlist button */}
                    <button
                        aria-label="Wishlist"
                        className="p-2 rounded-md hover:bg-[#FAD4C0] transition-colors duration-300"
                    >
                        <HeartIcon className="h-6 w-6 text-[#6CA0A3]" />
                    </button>

                    {/* Cart with badge */}
                    <a
                        href="/cart"
                        className="relative p-2 rounded-md hover:bg-[#FAD4C0] transition-colors duration-300"
                        aria-label="Cart"
                    >
                        <ShoppingCartIcon className="h-6 w-6 text-[#6CA0A3]" />
                        {cartItemCount > 0 && (
                            <span className="absolute -top-1 -right-2 bg-[#FFBC9A] text-[#4A4A4A] text-xs rounded-full px-2 font-bold">
                {cartItemCount}
              </span>
                        )}
                    </a>

                    {/* Auth buttons (auto-switching) */}
                    {isLoggedIn ? (
                        <>
                            <a
                                href="/account"
                                className="flex items-center space-x-2 text-[#6CA0A3] hover:text-[#FFBC9A] font-semibold transition-colors duration-300"
                            >
                                <UserIcon className="h-5 w-5" />
                                <span>My Account</span>
                            </a>
                            <button
                                onClick={() => setIsLoggedIn(false)}
                                className="flex items-center space-x-2 text-[#6CA0A3] hover:text-[#FFBC9A] font-semibold transition-colors duration-300"
                                aria-label="Logout"
                            >
                                <LogoutIcon className="h-5 w-5" />
                                <span>Logout</span>
                            </button>
                        </>
                    ) : (
                        <a
                            href="/signup"
                            className="flex items-center space-x-2 bg-[#FFBC9A] text-[#4A4A4A] px-4 py-1.5 rounded-md font-semibold hover:bg-[#e6a98c] transition-colors duration-300"
                        >
                            <UserIcon className="h-5 w-5" />
                            <span>Sign Up</span>
                        </a>
                    )}
                </div>

                {/* Mobile menu & icons */}
                <div className="md:hidden flex items-center space-x-2">
                    {/* Search toggle */}
                    <button
                        aria-label="Toggle Search"
                        className="p-2 rounded-md hover:bg-[#FAD4C0] transition-colors duration-300"
                        onClick={() => setSearchOpen((prev) => !prev)}
                    >
                        <SearchIcon className="h-6 w-6 text-[#6CA0A3]" />
                    </button>

                    {/* Theme toggle (placeholder) */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle Theme (future)"
                        className="p-2 rounded-md hover:bg-[#FAD4C0] transition-colors duration-300"
                    >
                        {theme === 'light' ? (
                            <MoonIcon className="h-6 w-6 text-[#6CA0A3]" />
                        ) : (
                            <SunIcon className="h-6 w-6 text-[#6CA0A3]" />
                        )}
                    </button>

                    {/* Hamburger menu */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                        className="p-2 rounded-md hover:bg-[#FAD4C0] transition-colors duration-300"
                    >
                        {menuOpen ? (
                            <XIcon className="h-6 w-6 text-[#6CA0A3]" />
                        ) : (
                            <MenuIcon className="h-6 w-6 text-[#6CA0A3]" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile search input */}
            {searchOpen && (
                <div ref={searchContainerRef} className="md:hidden px-6 pb-4 bg-[#FAFAFA]">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
                        className="w-full px-4 py-2 rounded-md border border-[#6CA0A3] bg-white text-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#FFBC9A] transition-colors font-normal"
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
                <nav className="md:hidden bg-[#FAFAFA] px-6 pb-6 space-y-4 font-semibold text-[#6CA0A3]">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block hover:text-[#FFBC9A] transition-colors duration-300"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Cart mobile */}
                    <a
                        href="/cart"
                        className="flex items-center space-x-2 hover:text-[#FFBC9A] transition-colors duration-300"
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
                                className="flex items-center space-x-2 hover:text-[#FFBC9A] transition-colors duration-300"
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
                                className="flex items-center space-x-2 hover:text-[#FFBC9A] transition-colors duration-300"
                            >
                                <LogoutIcon className="h-6 w-6" />
                                <span>Logout</span>
                            </button>
                        </>
                    ) : (
                        <a
                            href="/signup"
                            className="flex items-center space-x-2 bg-[#FFBC9A] text-[#4A4A4A] px-4 py-1.5 rounded-md hover:bg-[#e6a98c] transition-colors duration-300"
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
