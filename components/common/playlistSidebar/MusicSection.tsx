import React from 'react'
import PlayList from './Playlist'

type MusicProps = {
    title: string;
    playlist: PlayListType[]
}

const MusicSection = ({ title, playlist }: MusicProps) => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <p className='text-md font-medium'>{title}</p>
                <p className='text-sm text-slate-300'>See all</p>
            </div>

            <div className='flex flex-col gap-1'>
                {
                    playlist.map((play: PlayListType, index) => (
                        <PlayList play={play} key={index} />
                    ))
                }
            </div>

        </div>
    )
}

export default MusicSection