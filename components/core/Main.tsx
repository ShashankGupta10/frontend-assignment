"use client";
import { data } from '@/constants/main';
import React from 'react';
import TrendingSections from '../core/SongSections';
import Carousel from './Carousel';
import SearchSection from '../common/SearchSection';

const Main = ({ className }: { className: string }) => {

    const slides = [
        {
            image: 'https://i.scdn.co/image/ab67616d00001e02ba5db46f4b838ef6027e6f96',
            album: 'New Album',
            title: 'The Second Step: Chapter one',
            artist: 'Treasure',
        },
        {
            image: '/other-image.jpg',
            album: 'Another Album',
            title: 'Another Step: Chapter two',
            artist: 'Another Artist',
        },
    ];

    return (
        <div className={`main ${className} flex xl:mr-96 pb-[100px] flex-col h-screen overflow-y-scroll text-white px-7 bg-[#18191B]`}>
            <SearchSection />
            <Carousel slides={slides} />
            <div className='flex flex-col justify-center max-w-full mt-5'>
                {
                    data.map((section, index) => (
                        <TrendingSections key={index} TopHits={section.data} title={section.title} responsive={section.responsive} />
                    ))
                }
            </div>
        </div>
    );
}

export default Main;
