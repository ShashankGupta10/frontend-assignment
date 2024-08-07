import React from 'react'
import { LuMic } from 'react-icons/lu'
import { PiDevices } from 'react-icons/pi'
import { RiShareLine } from 'react-icons/ri'
import { SlVolume1 } from 'react-icons/sl'

const RightConfig = () => {
  return (
    <div className="w-[320px] hidden lg:flex gap-x-4 justify-center items-center h-full">
        <SlVolume1 className="w-6 h-6 cursor-pointer" />
        <input type="range" className="w-[30%] h-1"></input>
        <LuMic className="w-6 h-6 cursor-pointer" />
        <PiDevices className="w-6 h-6 cursor-pointer" />
        <RiShareLine className="w-6 h-6 text-white cursor-pointer" />
      </div>
  )
}

export default RightConfig