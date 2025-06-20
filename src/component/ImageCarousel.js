import React, { useEffect, useRef, useState } from 'react';

const images = [
    'https://picsum.photos/id/1015/800/400',
    'https://picsum.photos/id/1016/800/400',
    'https://picsum.photos/id/1018/800/400',
];

export default function ImageCarousel() {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef(null);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        timeoutRef.current = setTimeout(nextSlide, 4000);
        return () => clearTimeout(timeoutRef.current);
    }, [current]);

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden h-56 shadow-lg">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index}`}
                        className="w-full flex-shrink-0 h-[400px] object-cover"
                    />
                ))}
            </div>

            {/* Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
            >
                &#10095;
            </button>
        </div>
    );
}
