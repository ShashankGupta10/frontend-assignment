import React from 'react'
import Trendingcard from './SongsCard'

type TrendingProps = {
    title: string;
    TopHits: {
        id: number;
        img: string;
        title: string;
        artist: string;
    }[],
    responsive: boolean
}

const SongSections = ({ title, TopHits, responsive }: TrendingProps) => {
    return (
        <div className={`${responsive ? 'xl:hidden' : 'block'} flex flex-col`}>
            <div className='flex justify-between items-center mt-5'>
                <p className='text-2xl font-bold'>{title}</p>
                <p className='text-sm text-slate-300 '>See all</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3 items-center justify-center gap-2'>
                {
                    TopHits.map((list) => (
                        <div key={list.id} className='cursor-pointer'>
                            <Trendingcard list={list} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SongSections