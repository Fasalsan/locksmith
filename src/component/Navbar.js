// src/components/Navbar.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // Icon library (optional)
import { IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navItems = [
        { label: 'Home', to: '/' },
        { label: 'Products', to: '/products' },
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
    ];

    return (
        <nav className="bg-blue-600 text-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold">MyShop</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive ? 'underline font-semibold' : 'hover:underline'
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {menuOpen ? <IoClose size={24} /> : <FaBarsStaggered size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-600">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={() => setMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? 'block underline font-semibold'
                                    : 'block hover:underline'
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
}
