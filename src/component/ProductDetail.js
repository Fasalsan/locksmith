// src/pages/ProductDetail.jsx

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProductDetail() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const product = state?.product;

    if (!product) {
        return (
            <div>
                <h2 className="text-xl font-bold">Product not found</h2>
                <button onClick={() => navigate("/products")} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                    Back to Products
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto mt-10">
            <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded mb-4" />
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-blue-500 font-bold text-lg">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 mt-2">This is a detailed view of the product. You can customize this page.</p>
            <button onClick={() => navigate("/products")} className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">
                Back to Products
            </button>
        </div>
    );
}
