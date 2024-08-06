import Image from 'next/image'
import React from 'react'

const PlayList = ({ play }: any) => {

    return (
        <div className='flex justify-between items-center px-1'>
            <div className='flex gap-2 capitalize'>
                <div>
                    <Image src={"https://i.scdn.co/image/ab67616d00001e02e00b8a590bd56b7217372959"} alt='playlist' width={100} height={100} className='h-[50px] w-[50px] rounded object-cover' />
                </div>
                <div className='flex flex-col justify-center '>
                    <p className='font-semibold text-slate-300'>{play.title}</p>
                    <p className='text-xs font-semibold text-slate-500'>{play.artist}</p>
                </div>
            </div>

            <p className='text-xs text-slate-500'>{play.time}</p>
        </div>

    )
}

export default PlayList