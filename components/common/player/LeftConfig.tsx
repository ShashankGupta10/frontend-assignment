import MusicContext from '@/context/MusicContext'
import React, { useContext } from 'react'
import { CgAddR } from 'react-icons/cg'
import { FaRegHeart } from 'react-icons/fa'

const LeftConfig = () => {
  const { currentSong } = useContext(MusicContext)
  return (
    <div className="lg:flex hidden w-[320px] h-full justify-center gap-x-10 items-center">
        <div>{currentSong}</div>
        <FaRegHeart className="w-6 h-6" />
        <CgAddR className="w-6 h-6" />
      </div>
  )
}

export default LeftConfig