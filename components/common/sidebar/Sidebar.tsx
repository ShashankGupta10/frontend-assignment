"use client"
import React, { useState, useRef } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import Image from 'next/image';
import logo from "@/public/logo.jpg";

const Sidebar = ({ sidebarItems }: { sidebarItems: SidebarPropsType[] }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const featuresItems = sidebarItems.filter((item) => item.section === "Features");
    const libraryItems = sidebarItems.filter((item) => item.section === "Library");

    return (
        <div
            className={`transition-all duration-500 ease-in-out bg-[#0A0A0A] hidden xl:flex xl:h-screen flex-grow flex-col overflow-y-auto shadow-md ${isCollapsed ? "xl:w-16" : "xl:w-80"}`}
            ref={sidebarRef}
        >
            <div className="p-4 flex justify-between">
                <div className='flex gap-6'>
                    <Image src={logo} className="cursor-pointer" alt="SK logo" width={30} height={30} onClick={() => isCollapsed && setIsCollapsed(!isCollapsed)} />
                    <span className='text-white'>Music App</span>
                </div>
                <MdKeyboardArrowLeft
                    className={`h-6 w-6 cursor-pointer text-white transition-transform duration-500 ${isCollapsed ? "rotate-180" : ""}`}
                    onClick={() => setIsCollapsed((prev) => !prev)}
                />
            </div>
            <span className={`ml-3 mt-5 mb-2 block text-xs font-semibold text-gray-500 ${isCollapsed ? "hidden" : "block"}`}>Features</span>
            <div className="flex mt-3 flex-1 flex-col">
                <div className="flex flex-col gap-2">
                    <nav className="flex flex-1 flex-col gap-2">
                        {featuresItems.map((item, index) => (
                            <a
                                key={index}
                                className={`flex gap-4 cursor-pointer items-center border-indigo-600 py-2 px-4 text-white text-sm font-medium outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-indigo-600 hover:text-indigo-600 focus:border-l-4 ${isCollapsed ? "justify-center" : ""}`}
                            >
                                {item.icon}
                                {!isCollapsed && item.title}
                            </a>
                        ))}
                    </nav>

                    <span className={`ml-3 mt-10 mb-2 block text-xs font-semibold text-gray-500 ${isCollapsed ? "hidden" : "block"}`}>Library</span>

                    <nav className="flex flex-1 flex-col gap-2">
                        {libraryItems.map((item, index) => (
                            <a
                                key={index}
                                className={`flex gap-4 cursor-pointer items-center border-indigo-600 py-2 px-4 text-sm text-white font-medium outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-indigo-600 hover:text-indigo-600 focus:border-l-4 ${isCollapsed ? "justify-center" : ""}`}
                            >
                                {item.icon}
                                {!isCollapsed && item.title}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sidebar