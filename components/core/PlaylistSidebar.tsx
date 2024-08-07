"use client"
import { playlistItems } from '@/constants/playlistSidebar'
import { BellIcon, ChevronDown, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import MusicSection from '../common/MusicSection'

const PlaylistSidebar = () => {
    const [toggle, setToggle] = useState<boolean>(true)

    return (
        <div className="bg-[#0A0A0A] text-white w-96 h-screen absolute right-0 top-0 hidden xl:block rounded-l-xl px-4 py-2">
            <div className='flex flex-col gap-2 p-2 h-full w-full'>
                <div className='ml-2 block md:hidden' onClick={() => setToggle(!toggle)}>
                    <X />
                </div>
                <div className='flex justify-between h-fit w-full px-3'>
                    <div className='flex justify-center items-center gap-2 p-1'>
                        <Image src='https://i.scdn.co/image/ab67616d00001e02e00b8a590bd56b7217372959' alt='User' width={100} height={100} className='h-10 w-10 rounded-full object-cover' />
                        <p className='font-semibold text-sm'>Shashank Gupta</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <BellIcon />
                        <ChevronDown />
                    </div>
                </div>

                {playlistItems.map((item, index) => (
                    <MusicSection key={index} title={item.title} playlist={item.data} />
                ))}
                <button className='bg-slate-100 text-black text-center font-semibold capitalize p-2 py-3 rounded-md hover:bg-white hover:text-xl transition-all'>
                    <p>Create New Playlist</p>
                </button>
            </div>
        </div>
    )
}

export default PlaylistSidebar
