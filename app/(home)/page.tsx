import PlaylistSidebar from '@/components/core/PlaylistSidebar'
import Sidebar from '@/components/common/sidebar'
import Player from '@/components/common/player'
import React from 'react'

const page = () => {
    return (
        <div>
            <Sidebar />
            <PlaylistSidebar />
            <Player />
        </div>
    )
}

export default page