"use client";
import LeftConfig from "./LeftConfig";
import PlayerConfig from "./PlayerConfig";
import RightConfig from "./RightConfig";

export default function PlayBar() {
    return (
        <div className="md:absolute fixed inset-x-0 bottom-14 xl:bottom-0 z-10 flex justify-center items-center h-[10%] bg-zinc-900 rounded-t-xl text-white w-full ">
            <LeftConfig />
            <PlayerConfig />
            <RightConfig />
        </div>
    );
}