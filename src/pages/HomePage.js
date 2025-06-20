import React from 'react';
import ImageCarousel from '../component/ImageCarousel'; 
export default function HomePage() {
    return (

        <div>
            <div className=" bg-gray-100 flex items-center justify-center">
                <ImageCarousel />
            </div>
            <div className="text-center mt-10">
                <marquee className="text-3xl font-bold">Welcome to LockSmith</marquee>
                <p className="mt-2 text-gray-600">Browse our product catalog.</p>
            </div>
        </div>
    )
}
