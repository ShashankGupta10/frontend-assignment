import Image from 'next/image';
import React from 'react';

const TrendingCard = ({ list }: {
    list: {
        id: number;
        img: string;
        title: string;
        artist: string;
        audioURL: string; 
    }
}) => {
    const playMusic = (url: string) => {
        const audio = new Audio(url);
        audio.play();
    }
    

    return (
        <div key={list.id} className='flex flex-col transition-all ease-in-out duration-150 hover:scale-110'
            onClick={() => playMusic(list.audioURL)}
        >
            <Image quality={100} src={list.img} alt="playlist" width={250} height={250} className='rounded-md object-cover' />
            <div className='flex flex-col capitalize mt-2'>
                <span className='font-semibold text-sm'>{list.title}</span>
                <span className='text-xs text-slate-300'>{list.artist}</span>
            </div>
        </div>
    );
}

export default TrendingCard;
