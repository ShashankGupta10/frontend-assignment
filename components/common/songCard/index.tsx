import Image from 'next/image'
import React from 'react'

const Trendingcard = ({ list }: {
    list: {
        id: number;
        img: string;
        title: string;
        artist: string;
    }
}) => {
    return (
        <div key={list.id} className='flex flex-col transition-all ease-in-out duration-150 hover:scale-110'>
            <Image quality={100} src={list.img} alt="playlist" width={250} height={250} className='rounded-md object-cover' />
            <div className='flex flex-col capitalize mt-2'>
                <span className='font-semibold text-sm'>{list.title}</span>
                <span className='text-xs text-slate-300'>{list.artist}</span>
            </div>
        </div>
    )
}

export default Trendingcard