"use client"
import { useState } from 'react'
import PlaylistSidebar from '@/components/common/playlistSidebar'
import Sidebar from '@/components/common/sidebar'
import Player from '@/components/common/player/index'
import React from 'react'
import MainSection from '@/components/core/main'
import MusicContext from '@/context/MusicContext'

const Home = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [currentSong, setCurrentSong] = useState<string>("")
    const [currentAudioRef, setCurrentAudioRef] = useState<HTMLAudioElement | null>(null)
    return (
        <MusicContext.Provider value={{ isPlaying, setIsPlaying, currentSong, setCurrentSong, currentAudioRef, setCurrentAudioRef }}>
            <div className='bg-black flex gap-0'>
                <Sidebar />
                <MainSection className='flex-grow' />
                <PlaylistSidebar />
                <Player />
            </div>
        </MusicContext.Provider>
    )
}

export default Home