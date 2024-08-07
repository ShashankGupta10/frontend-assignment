import React from 'react'
import SongsCard from '../../common/songCard'

type TrendingProps = {
    title: string;
    songs: {
        id: number;
        img: string;
        title: string;
        artist: string;
        audioURL: string;
    }[],
    responsive: boolean
}

const SongSections = ({ title, songs, responsive }: TrendingProps) => {
    return (
        <div className={`${responsive ? 'xl:hidden' : 'block'} flex flex-col`}>
            <div className='flex justify-between items-center mt-5'>
                <p className='text-2xl font-bold'>{title}</p>
                <p className='text-sm text-slate-300 '>See all</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 items-center justify-center gap-2'>
                {
                    songs.map((song) => (
                        <div key={song.id} className='cursor-pointer'>
                            <SongsCard list={song} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SongSections