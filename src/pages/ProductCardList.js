import React from 'react';
import ProductCard from '../component/ProductCard';
import Modal from '../component/Modal';
import { useState } from 'react';

const products = [
    { id: 1, name: "សោរឡាន", price: 19.99, image: "https://northcoastkeyless.com/wp-content/uploads/2021/11/HONPROX5-NM-MAIN1.jpg" },
    { id: 2, name: "សោរឡាន", price: 49.99, image: "https://northcoastkeyless.com/wp-content/uploads/2021/11/HONPROX5-NM-MAIN1.jpg" },
    { id: 3, name: "សោរឡាន", price: 29.99, image: "https://northcoastkeyless.com/wp-content/uploads/2021/11/HONPROX5-NM-MAIN1.jpg" },
    { id: 4, name: "សោរឡាន", price: 9.99, image: "https://northcoastkeyless.com/wp-content/uploads/2021/11/HONPROX5-NM-MAIN1.jpg" },

];

const ProductCardList = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleView = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    const handleAddToCart = (product) => {
        alert(`Added to cart: ${product.name}`);
    };


    return (
        <div className="p-4">

            <h1 className="text-2xl font-bold mb-4 text-red-700">សូមស្វាគមន៍​មកកាន់ផេក​សាន់សាន់</h1>
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onView={handleView}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>


            <Modal isOpen={!!selectedProduct} onClose={handleCloseModal}>
                {selectedProduct && (
                    <div>
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            className="w-full h-48 object-cover rounded mb-4"
                        />
                        <h2 className="text-xl font-semibold">{selectedProduct.name}</h2>
                        <p className="text-blue-500 font-bold mb-2">${selectedProduct.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-700">{selectedProduct.description}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ProductCardList;
