"use client";
import { data } from '@/constants/main';
import React from 'react';
import SongSections from './SongSections';
import Carousel from './Carousel';
import SearchSection from './SearchSection';

const Main = ({ className }: { className: string }) => {
    const slides = [
        {
            image: 'https://i.pinimg.com/originals/45/d0/79/45d0790c293e5dba3077f4ad0c4826c6.gif',
            album: 'The Viraris',
            title: 'The Second Step: Chapter one',
            artist: 'Ajaykumar Maurya',
        },
        {
            image: 'https://i.pinimg.com/736x/01/16/25/011625582e301feccdfbb065b3a8ac26.jpg',
            album: 'My country',
            title: 'Another Step: Chapter two',
            artist: 'Sumil Suthar',
        },
        {
            image: 'https://i.pinimg.com/736x/01/16/25/011625582e301feccdfbb065b3a8ac26.jpg',
            album: 'Workout motivation',
            title: 'Another Step: Chapter three',
            artist: 'Sarthak Tanpure',
        },
    ];

    return (
        <div className={`main ${className} flex xl:mr-96 pb-[100px] flex-col h-screen overflow-y-scroll text-white px-7 bg-[#18191B]`}>
            <SearchSection />
            <Carousel slides={slides} />
            <div className='flex flex-col justify-center max-w-full mt-5'>
                {
                    data.map((section, index) => (
                        <SongSections key={index} songs={section.data} title={section.title} responsive={section.responsive} />
                    ))
                }
            </div>
        </div>
    );
}

export default Main;
