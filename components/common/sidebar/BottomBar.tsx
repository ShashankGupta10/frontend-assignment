import React from 'react'

const BottomBar = ({ home, download, collections, favourites, localFiles, discover }: SidebarPropsType) => {
    return (
        <div className="md:hidden fixed inset-x-0 bottom-0 bg-white shadow-lg flex justify-around">
            <div className='flex flex-col justify-center items-center'>
                <a href="#" className="py-4 text-indigo-600">
                    {home}
                </a>
                <span className="hidden sm:block">Home</span>
            </div>
            <div className='flex flex-col justify-center items-center'><a href="#" className="py-4 text-gray-600 hover:text-indigo-600">
                {discover}
            </a>
                <span className="hidden sm:block">Discover</span></div>
            <div className='flex flex-col justify-center items-center'><a href="#" className="py-4 text-gray-600 hover:text-indigo-600">
                {collections}
            </a>
                <span className="hidden sm:block">Collections</span></div>
            <div className='flex flex-col justify-center items-center'>
                <a href="#" className="py-4 text-gray-600 hover:text-indigo-600">
                    {download}
                </a>
                <span className="hidden sm:block">Downloads</span>
            </div>
            <div className='flex flex-col justify-center items-center'><a href="#" className="py-4 text-gray-600 hover:text-indigo-600">
                {download}
            </a>
                <span className="hidden sm:block">Favourites</span></div>
            <div className='flex flex-col justify-center items-center'>
                <a href="#" className="py-4 text-gray-600 hover:text-indigo-600">
                    {localFiles}
                </a>
                <span className='hidden sm:block'>Local files</span>
            </div>
        </div>
    )
}

export default BottomBar