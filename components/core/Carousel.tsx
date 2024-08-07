import React, { useState, useEffect } from 'react';

const Carousel = ({ slides }: {
    slides: {
        image: string;
        album: string;
        title: string;
        artist: string;
    }[];
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative h-[280px] mt-5 bg-no-repeat bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${slides[currentIndex].image})` }}>
            <div className='flex justify-start h-full p-5 bg-black bg-opacity-50 rounded-xl'>
                <div className='h-full p-5 space-y-2'>
                    <p className='text-xs'>{slides[currentIndex].album}</p>
                    <p className='md:text-5xl font-bold'>{slides[currentIndex].title}</p>
                    <p className='text-black/90 font-bold uppercase'>{slides[currentIndex].artist}</p>
                    <button className='flex'>
                        <p className='bg-blue-600 text-center text-sm px-5 font-semibold py-2 rounded-md'>Listen Now</p>
                    </button>
                </div>
            </div>
            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer text-3xl text-white" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}>‹</div>
            <div className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer text-3xl text-white" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}>›</div>
        </div>
    );
};

export default Carousel;