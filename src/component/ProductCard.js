// src/components/ProductCard.jsx

import React from 'react';

const ProductCard = ({ product, onView, onAddToCart }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 object-cover"
            />
            <div className="p-3">
                <h2 className="text-sm font-semibold">{product.name}</h2>
                <p className="text-blue-500 font-bold text-xs">${product.price.toFixed(2)}</p>
                <div className="mt-3 flex justify-between gap-2">
                    <button
                        onClick={() => onView(product)}
                        className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                    >
                        View
                    </button>
                    <button
                        onClick={() => onAddToCart(product)}
                        className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
