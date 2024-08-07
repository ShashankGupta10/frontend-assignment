import MusicContext from '@/context/MusicContext'
import { Music } from 'lucide-react'
import Image from 'next/image'
import React, { useContext, useRef } from 'react'

const PlayList = ({ play }: { play: PlayListType }) => {
    const { isPlaying, setIsPlaying, currentAudioRef, setCurrentAudioRef, setCurrentSong } = useContext(MusicContext)

    const playMusic = (url: string, title: string) => {
        setCurrentSong(title);
        if (isPlaying && currentAudioRef) currentAudioRef.pause();

        const audio = new Audio(url);
        audio.play();

        setCurrentAudioRef(audio);
        setIsPlaying(true);
    }

    return (
        <div 
            className='flex justify-between px-3 items-center hover:bg-gray-900 rounded-xl cursor-pointer' 
            onClick={() => play.audioURL && playMusic(play.audioURL, play.title)}
        >
            <div className='flex gap-4 capitalize p-3 rounded-xl'>
                <div>
                    <Image 
                        src={play.image} 
                        alt='playlist' 
                        width={100} 
                        height={100} 
                        className='h-[50px] w-[50px] rounded object-cover' 
                    />
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='font-semibold text-slate-300'>{play.title}</p>
                    <p className='text-xs font-semibold text-slate-500'>{play.artist}</p>
                </div>
            </div>
            <p className='text-xs text-slate-500'>{play.time}</p>
        </div>
    )
}

export default PlayList
