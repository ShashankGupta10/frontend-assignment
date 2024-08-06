"use client";
import { data } from '@/constants/main';
import { ChevronLeft, ChevronRight, Ellipsis, Menu, Search } from 'lucide-react';
import React, { useState } from 'react';
import TrendingSections from '../core/SongSections';

const Main = ({ className }: { className: string }) => {
    const [value, setValue] = useState<boolean>(true);
    const [toggle, setToggle] = useState<boolean>(true);

    return (
        <div className={`example ${className} flex xl:mr-96 pb-[100px] flex-col overflow-y-scroll  h-screen text-white px-7 bg-[#18191B]`}>
            <div className='flex justify-between gap-5 p-2 pt-5 items-center'>
                <div className='hidden md:flex'>
                    <ChevronLeft />
                    <ChevronRight />
                </div>
                <div className='w-full bg-white text-black rounded-full p-1 flex'>
                    <Search className='mt-1 ml-2 text-slate-500' />
                    <input type='text' placeholder='Search' className='border-none outline-none rounded-full p-1 w-full' />
                </div>
                <div className='cursor-pointer' onClick={() => setToggle(!toggle)}>
                    <Ellipsis />
                </div>
            </div>
            <div className="bg-[url('/back.jpg')] text-white h-[280px] mt-5 bg-no-repeat bg-cover bg-center rounded-xl">
                <div className='flex justify-start h-full p-5'>
                    <div className='h-full p-5 space-y-2'>
                        <p className='text-xs'>New Album</p>
                        <p className='md:text-5xl font-bold'>The Second Step: <br /> Chapter one</p>
                        <p className='text-black/90 font-bold uppercase'>Treasure</p>
                        <div className='flex'>
                            <p className='bg-blue-600 text-center text-sm px-5 font-semibold py-2 rounded-md'>Listen Now</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center max-w-full'>
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
