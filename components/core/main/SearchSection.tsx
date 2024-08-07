import { ChevronLeft, ChevronRight, Ellipsis, Search } from 'lucide-react'
import React, { useState } from 'react'

const SearchSection = () => {
    const [toggle, setToggle] = useState<boolean>(true);

    return (
        <div className='flex justify-between gap-5 p-2 pt-5 items-center'>
            <div className='hidden md:flex'>
                <ChevronLeft />
                <ChevronRight />
            </div>
            <div className='w-full bg-white text-black rounded-full p-1 flex'>
                <Search className='mt-1 ml-2 text-slate-500' />
                <input type='text' placeholder='Search' className='border-none outline-none rounded-full p-1 w-full' />
            </div>
            <Ellipsis className='cursor-pointer' onClick={() => setToggle(!toggle)} />
        </div>
    )
}

export default SearchSection