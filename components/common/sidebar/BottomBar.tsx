import React from 'react'

const BottomBar = ({ sidebarItems }: { sidebarItems: SidebarPropsType[] }) => {
    return (
        <div className='xl:hidden bg-zinc-900 fixed inset-x-0 bottom-0 shadow-lg flex justify-around text-white'>
            {
                sidebarItems.map((item: SidebarPropsType, index) => (
                    <div className='flex flex-col justify-center items-center' key={index}>
                        <a href="#" className="py-4 text-white hover:text-indigo-600">
                            {item.icon}
                        </a>
                    </div>
                ))
            }
        </div>
    )
}

export default BottomBar