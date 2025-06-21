import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const product = location.state; // coming from navigate()

    if (!product) {
        return <div className="p-4">Product not found or missing state.</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-blue-600 font-semibold text-lg">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-700 mt-2">{product.description || "No description available."}</p>
        </div>
    );
};

export default ProductDetail;
