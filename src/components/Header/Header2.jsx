import React, {useState, useEffect, useRef} from "react";
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
} from "@heroicons/react/outline";
import {useSearch} from "../../contexts/SearchContext.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useCart} from "../../contexts/CartContext.jsx";
import CartDrawer from "../Cart/CartDrawer.jsx";
import AccountDropdown from "../Accounts/AccountDropdown.jsx";

const navLinks = [
    {name: "Home", href: "/"},
    {name: "Shop", href: "/products"},
    {name: "About Us", href: "/about"},
    {name: "Contact", href: "/contact"},
];

export default function Header2() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated auth
    const [searchOpen, setSearchOpen] = useState(false);
    const [theme, setTheme] = useState("light");
    const searchContainerRef = useRef(null);
    const {cartItems} = useCart();
    const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0); // Replace with real cart count if you have one
    const [drawerOpen, setDrawerOpen] = useState(false);
    // Global search context/state
    const {searchQuery, setSearchQuery} = useSearch();
    const navigate = useNavigate();

    // Dark/light theme logic
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    // On mount, get initial theme from localStorage or system
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (
            savedTheme === "dark" ||
            (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    // Click outside closes search bar
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                searchContainerRef.current &&
                !searchContainerRef.current.contains(event.target)
            ) {
                setSearchOpen(false);
            }
        }

        if (searchOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [searchOpen]);

    // Focus search input when open
    useEffect(() => {
        if (searchOpen && searchContainerRef.current) {
            const input = searchContainerRef.current.querySelector("input");
            input && input.focus();
        }
    }, [searchOpen]);

    // Keyboard shortcuts for search
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape") setSearchOpen(false);
            if (e.key === "Enter" && searchOpen) {
                e.preventDefault();
                handleSearchSubmit();
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
        // eslint-disable-next-line
    }, [searchOpen, searchQuery]);

    // Theme toggle handler
    function toggleTheme() {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    // Search submit handler: update global search and go to /products
    function handleSearchSubmit(e) {
        if (e) e.preventDefault();
        if (searchQuery.trim()) {
            setSearchOpen(false);
            navigate("/products");
        }
    }

    return (
        <>
            <header
                className="sticky top-0 z-50 bg-[#FAFAFA] dark:bg-[#1E293B] text-[#4A4A4A] dark:text-[#F1F5F9] shadow-sm font-poppins select-none transition-colors duration-500">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:py-5">
                    {/* Logo */}
                    <a
                        href="/"
                        className="text-4xl font-dancingScript text-[#6CA0A3] dark:text-[#7DD3FC] hover:text-[#7BB0B0] dark:hover:text-[#a5d8ff] transition-colors duration-300"
                        style={{fontFamily: "'Dancing Script', cursive"}}
                    >
                        Empawar
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-10 font-semibold text-lg items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="hover:text-[#6CA0A3] dark:hover:text-[#a5d8ff] transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Search Icon + Input: Combined for outside click logic */}
                        <div
                            ref={searchContainerRef}
                            className="flex items-center ml-4 relative"
                        >
                            <form
                                onSubmit={handleSearchSubmit}
                                className="flex items-center"
                                autoComplete="off"
                            >
                                <button
                                    aria-label="Toggle Search"
                                    type="button"
                                    className={`p-2 rounded-md transition-colors duration-300 ${
                                        searchOpen
                                            ? "bg-[#FAD4C0] dark:bg-[#FBBF24]"
                                            : "hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24]"
                                    }`}
                                    onClick={() => setSearchOpen((v) => !v)}
                                >
                                    <SearchIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]"/>
                                </button>
                                {searchOpen && (
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                        className="ml-2 px-3 py-1 rounded-md border border-[#6CA0A3] dark:border-[#7DD3FC] bg-white dark:bg-[#2e3748] text-[#4A4A4A] dark:text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#FFBC9A] dark:focus:ring-[#FBBF24] transition-width duration-300 font-normal"
                                        style={{width: "200px"}}
                                        autoFocus
                                    />
                                )}
                            </form>
                        </div>
                    </nav>

                    {/* Right Side Icons and CTAs (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle Dark/Light Mode"
                            className="p-2 rounded-md hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition-colors duration-300"
                            type="button"
                        >
                            {theme === "light" ? (
                                <MoonIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]"/>
                            ) : (
                                <SunIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]"/>
                            )}
                        </button>
                        {/* Wishlist */}
                        <button
                            aria-label="Wishlist"
                            className="p-2 rounded-md hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition-colors duration-300"
                            type="button"
                        >
                            <HeartIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]"/>
                        </button>
                        {/* Cart with badge */}
                        <button
                            onClick={() => setDrawerOpen(true)}
                            className="relative p-2"
                            aria-label="Cart"
                        >
                            <ShoppingCartIcon className="h-6 w-6"/>
                            {cartItemCount > 0 && (
                                <span
                                    className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
              {cartItemCount}
            </span>
                            )}
                        </button>
                        <AccountDropdown />
                    </div>

                    {/* Mobile menu, search and theme toggles */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/* Search Toggle on Mobile */}
                        <button
                            aria-label="Toggle Search"
                            className="p-2 rounded-md hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition-colors duration-300"
                            onClick={() => setSearchOpen((v) => !v)}
                            type="button"
                        >
                            <SearchIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]"/>
                        </button>
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle Dark/Light Mode"
                            className="p-2 rounded-md hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition-colors duration-300"
                            type="button"
                        >
                            {theme === "light" ? (
                                <MoonIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]"/>
                            ) : (
                                <SunIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]"/>
                            )}
                        </button>
                        {/* Hamburger menu */}
                        <button
                            onClick={() => setMenuOpen((prev) => !prev)}
                            aria-label="Toggle Menu"
                            className="p-2 rounded-md hover:bg-[#FAD4C0] dark:hover:bg-[#FBBF24] transition-colors duration-300"
                            type="button"
                        >
                            {menuOpen ? (
                                <XIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]"/>
                            ) : (
                                <MenuIcon className="h-6 w-6 text-[#6CA0A3] dark:text-[#7DD3FC]"/>
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
                        <form
                            onSubmit={handleSearchSubmit}
                            className="flex items-center"
                            autoComplete="off"
                        >
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="w-full px-4 py-2 rounded-md border border-[#6CA0A3] dark:border-[#7DD3FC] bg-white dark:bg-[#2e3748] text-[#4A4A4A] dark:text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#FFBC9A] dark:focus:ring-[#FBBF24] transition-colors font-normal"
                                autoFocus
                            />
                        </form>
                    </div>
                )}

                {/* Mobile menu */}
                {menuOpen && (
                    <nav
                        className="md:hidden bg-[#FAFAFA] dark:bg-[#1E293B] px-6 pb-6 space-y-4 font-semibold text-[#6CA0A3] dark:text-[#7DD3FC]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block hover:text-[#FFBC9A] dark:hover:text-[#FBBF24] transition-colors duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Cart mobile */}
                        <Link
                            to="/cart"
                            className="relative flex items-center space-x-2 hover:text-[#FFBC9A] dark:hover:text-[#FBBF24] transition-colors duration-300"
                            onClick={() => setMenuOpen(false)} // if you want to close the menu after click
                        >
                            <div className="relative">
                                <ShoppingCartIcon className="h-6 w-6"/>
                                {cartItemCount > 0 && (
                                    <span
                                        className="absolute -top-1 -right-2 bg-[#FFBC9A] text-[#4A4A4A] font-bold text-xs rounded-full px-2 dark:bg-[#FBBF24] dark:text-[#1E293B]">
        {cartItemCount > 9 ? '9+' : cartItemCount}
      </span>
                                )}
                            </div>
                            <span>Cart</span>
                        </Link>
                        {/* Auth mobile */}
                        <AccountDropdown />
                    </nav>
                )}
            </header>
            <CartDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}/>
        </>
    );
}
