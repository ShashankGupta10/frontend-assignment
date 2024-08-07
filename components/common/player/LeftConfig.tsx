import React from 'react'
import { CgAddR } from 'react-icons/cg'
import { FaRegHeart } from 'react-icons/fa'

const LeftConfig = () => {
  return (
    <div className="lg:flex hidden w-[320px] h-full justify-center gap-x-10 items-center">
        <div>-- -:- --</div>
        <FaRegHeart className="w-6 h-6" />
        <CgAddR className="w-6 h-6" />
      </div>
  )
}

export default LeftConfig