"use client"
import React, { useState, useRef } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import Image from 'next/image';
import logo from "@/public/images/logo.jpeg";

const Sidebar = ({ home, download, collections, favourites, localFiles, discover }: SidebarPropsType) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const handleCollapse = () => {
        setIsCollapsed((prev) => !prev);
    };
    return (
        <div
            className={`transition-all duration-500 ease-in-out bg-[#0A0A0A] hidden xl:flex xl:h-screen flex-grow flex-col overflow-y-auto rounded-br-lg rounded-tr-lg shadow-md ${isCollapsed ? "xl:w-16" : "xl:w-80"}`}
            ref={sidebarRef}
        >
            <div className="p-4 flex justify-between">
                <div className='flex gap-6'>
                    <Image src={logo} className="cursor-pointer" alt="SK logo" width={30} height={30} onClick={() => isCollapsed && setIsCollapsed(!isCollapsed)} />
                    <span className='text-white'>SuperKalam</span>
                </div>
                <MdKeyboardArrowLeft
                    className={`h-6 w-6 cursor-pointer text-white transition-transform duration-500 ${isCollapsed ? "rotate-180" : ""}`}
                    onClick={handleCollapse}
                />
            </div>
            <span className={`ml-3 mt-5 mb-2 block text-xs font-semibold text-gray-500 ${isCollapsed ? "hidden" : "block"}`}>Features</span>

            <div className="flex mt-3 flex-1 flex-col">
                <div className="flex flex-col gap-2">
                    <nav className="flex flex-1 flex-col gap-2">
                        <a
                            href="#"
                            title=""
                            className={`flex gap-4 cursor-pointer items-center border-indigo-600 py-2 px-4 text-white text-sm font-medium outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-indigo-600 hover:text-indigo-600 focus:border-l-4 ${isCollapsed ? "justify-center" : ""}`}
                        >
                            {home}
                            {!isCollapsed && "Home"}
                        </a>

                        <a
                            href="#"
                            className={`flex gap-4 cursor-pointer items-center border-indigo-600 py-2 px-4 text-sm text-white font-medium outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-indigo-600 hover:text-indigo-600 focus:border-l-4 ${isCollapsed ? "justify-center" : ""}`}
                        >
                            {discover}
                            {!isCollapsed && "Discover"}
                        </a>

                        <div className="relative transition">
                            <input className="peer hidden" type="checkbox" id="menu-1" />
                            <button
                                className={`flex gap-4 peer relative w-full items-center border-indigo-600 py-3 px-4 text-sm text-white font-medium outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:text-indigo-600 focus:border-l-4 ${isCollapsed ? "justify-center" : ""}`}
                            >
                                {collections}
                                {!isCollapsed && "Collections"}
                                <label htmlFor="menu-1" className="absolute inset-0 h-full w-full cursor-pointer"></label>
                            </button>
                        </div>
                    </nav>

                    <span className={`ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500 ${isCollapsed ? "hidden" : "block"}`}>Library</span>

                    <nav className="flex flex-1 flex-col gap-2">
                        <a
                            href="#"
                            className={`flex gap-4 cursor-pointer items-center border-indigo-600 py-2 px-4 text-sm text-white font-medium outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-indigo-600 hover:text-indigo-600 focus:border-l-4 ${isCollapsed ? "justify-center" : ""}`}
                        >
                            {download}
                            {!isCollapsed && "Downloads"}
                        </a>
                    </nav>
                    <nav className="flex flex-1 flex-col gap-2">
                        <a
                            href="#"
                            className={`flex gap-4 cursor-pointer items-center border-indigo-600 py-2 px-4 text-sm text-white font-medium outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-indigo-600 hover:text-indigo-600 focus:border-l-4 ${isCollapsed ? "justify-center" : ""}`}
                        >
                            {favourites}
                            {!isCollapsed && "Favourites"}
                        </a>

                        <a
                            href="#"
                            className={`flex gap-4 cursor-pointer items-center border-indigo-600 py-2 px-4 text-sm text-white font-medium outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-indigo-600 hover:text-indigo-600 focus:border-l-4 ${isCollapsed ? "justify-center" : ""}`}
                        >
                            {localFiles}
                            {!isCollapsed && "Local Files"}
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sidebar