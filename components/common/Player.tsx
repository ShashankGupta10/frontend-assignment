"use client";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { IoClose, IoShuffle } from "react-icons/io5";
import { MdPlayCircleFilled } from "react-icons/md";
import { PiDevices, PiSkipBack, PiSkipForward } from "react-icons/pi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { SlVolume1 } from "react-icons/sl";
import { LuMic } from "react-icons/lu";
import { RiShareLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

export default function PlayBar() {
  const [hamburgerState, setHamburgerState] = useState(false);

  return (
    <div className="md:absolute fixed inset-x-0 bottom-14 xl:bottom-0 z-10 flex justify-center items-center h-[10%] bg-zinc-900 rounded-t-xl text-white w-full ">
      <div className="lg:flex hidden w-[320px] h-full justify-center gap-x-10 items-center">
        <div>-- -:- --</div>
        <FaRegHeart className="w-6 h-6" />
        <CgAddR className="w-6 h-6" />
      </div>
      <div className="w-[500px] pt-2 flex flex-col justify-center items-center h-full">
        <div className="flex w-full h-full justify-center items-center gap-x-7 md:gap-x-10">
          <FaRegHeart className="w-6 h-6 lg:hidden flex cursor-pointer" />
          <IoShuffle className="w-6 h-6 cursor-pointer" />
          <PiSkipBack className="w-6 h-6 cursor-pointer" />
          <MdPlayCircleFilled className="w-14 h-14 cursor-pointer" />
          <PiSkipForward className="w-6 h-6 cursor-pointer" />
          <HiOutlineArrowPathRoundedSquare className="w-6 h-6 cursor-pointer" />
          <div
            className={
              hamburgerState
                ? " flex ease-in-out w-[150px] lg:hidden flex-col justify-start items-center gap-y-6 right-0 p-5 bottom-[91px] bg-zinc-950 rounded-t-lg absolute h-[200px] "
                : " hidden "
            }
          >
            <LuMic className="w-6 h-6 cursor-pointer" />
            <PiDevices className="w-6 h-6 cursor-pointer" />
            <RiShareLine className="w-6 h-6 text-white cursor-pointer" />
            <div className=" flex items-center gap-x-4 ">
              <SlVolume1 className="w-6 h-6 cursor-pointer" />
              <input type="range" className="w-[50%] h-[2px]" />
            </div>
          </div>
          {hamburgerState ? (
            <button
              onClick={() => setHamburgerState(false)}
              className="w-6 h-6 lg:hidden flex"
            >
              <IoClose className="text-white w-6 h-6 cursor-pointer" />
            </button>
          ) : (
            <button onClick={() => setHamburgerState(true)} className="w-6 h-6 lg:hidden flex">
              <RxHamburgerMenu className="w-full h-full text-white cursor-pointer" />
            </button>
          )}
        </div>
        <div className="w-full h-full">
          <input className="w-full h-[3px]" type="range"></input>
        </div>
      </div>
      <div className="w-[320px] hidden lg:flex gap-x-4 justify-center items-center h-full">
        <SlVolume1 className="w-6 h-6 cursor-pointer" />
        <input type="range" className="w-[30%] h-1"></input>
        <LuMic className="w-6 h-6 cursor-pointer" />
        <PiDevices className="w-6 h-6 cursor-pointer" />
        <RiShareLine className="w-6 h-6 text-white cursor-pointer" />
      </div>
    </div>
  );
}