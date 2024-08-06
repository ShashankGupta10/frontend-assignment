import React from 'react'
import PlayList from './Playlist'

type MusicProps = {
    title: string;
    playlist: any[]
}

const MusicSection = ({ title, playlist }: MusicProps) => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <p className='text-md font-medium'>{title}</p>
                <p className='text-sm text-slate-300'>See all</p>
            </div>

            <div className='mt-3 flex flex-col gap-3'>
                {
                    playlist.map((play: any) => (
                        <div key={play.id} className='cursor-pointer'>
                            <PlayList play={play} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default MusicSection