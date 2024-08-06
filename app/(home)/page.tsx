import PlaylistSidebar from '@/components/core/PlaylistSidebar'
import Sidebar from '@/components/common/sidebar'
import Player from '@/components/common/player'
import React from 'react'
import MainSection from '@/components/core/Main'

const page = () => {
    return (
        <div className='bg-black flex gap-0'>
            <Sidebar />
            <MainSection className='flex-grow' />
            <PlaylistSidebar />
            <Player />
        </div>
    )
}

export default page