// src/components/AccountDropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from "../../contexts/AuthContext.jsx";

export default function AccountDropdown() {
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (!user) {
        return <Link to="/login" className="text-sm font-semibold">Sign In</Link>;
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setOpen(o => !o)} className="flex items-center gap-2">
                <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium">{user.name}</span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#1E293B] shadow-lg rounded-md overflow-hidden z-50">
                    <div className="px-4 py-3 border-b">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <ul className="py-1 text-sm">
                        <li>
                            <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#243047]">My Orders</Link>
                        </li>
                        <li>
                            <Link to="/wishlist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#243047]">Wishlist</Link>
                        </li>
                        <li>
                            <Link to="/account" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#243047]">Account Settings</Link>
                        </li>
                    </ul>
                    <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#243047] border-t"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
