import React from 'react';
import ImageCarousel from '../component/ImageCarousel';
import ProductCard from '../component/ProductCard';
import Data from '../api/Products';

export default function HomePage() {
    return (

        <div className="p-2">
            {/* <div className=" bg-gray-100 flex items-center justify-center">
                <ImageCarousel />
            </div> */}
            {/* <div className="text-center mt-10">
                <marquee className="text-3xl font-bold">Welcome to LockSmith</marquee>
                <p className="mt-2 text-gray-600">Browse our product catalog.</p>
            </div> */}

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {Data.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    // onView={handleView}
                    // onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    )
}
