// src/components/Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 shadow">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">MyShop</div>
                <div className="space-x-4">
                    <NavLink to="/" className="hover:underline">Home</NavLink>
                    <NavLink to="/products" className="hover:underline">Products</NavLink>
                </div>
            </div>
        </nav>
    );
}
