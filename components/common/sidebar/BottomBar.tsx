import React from 'react'

const BottomBar = ({ home, download, collections, favourites, localFiles, discover }: SidebarPropsType) => {
    return (
        <div className="xl:hidden bg-zinc-900 fixed inset-x-0 bottom-0 shadow-lg flex justify-around text-white">
            <div className='flex flex-col justify-center items-center'>
                <a href="#" className="py-4 text-indigo-600">
                    {home}
                </a>
            </div>
            <div className='flex flex-col justify-center items-center'><a href="#" className="py-4 text-white hover:text-indigo-600">
                {discover}
            </a>
            </div>
            <div className='flex flex-col justify-center items-center'><a href="#" className="py-4 text-white hover:text-indigo-600">
                {collections}
            </a>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <a href="#" className="py-4 text-white hover:text-indigo-600">
                    {download}
                </a>
            </div>
            <div className='flex flex-col justify-center items-center'><a href="#" className="py-4 text-white hover:text-indigo-600">
                {favourites}
            </a>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <a href="#" className="py-4 text-white hover:text-indigo-600">
                    {localFiles}
                </a>
            </div>
        </div>
    )
}

export default BottomBar