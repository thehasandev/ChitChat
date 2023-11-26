import React from 'react'
import { TiHome } from "react-icons/ti";
import { FiMessageSquare } from "react-icons/fi";
import { HiUsers } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";
import { PiUsersThreeFill } from "react-icons/pi";

function Sidevar() {
  return (
    <div className=' h-screen bg-white px-8'>
      <div className='flex items-center gap-x-2 mt-8 bg-primary rounded-[5px] pl-3 pr-6 py-2.5'>
        <TiHome size={22} className='text-white'/>
        <p className='font-intel font-semibold text-white text-base'>Home</p>
      </div>

      <div className='flex items-center gap-x-2 mt-8 bg-primary rounded-[5px] pl-3 pr-6 py-2.5'>
        <FiMessageSquare size={22} className='text-white'/>
        <p className='font-intel font-semibold text-white text-base'>Chat</p>
      </div>

     
      <div className='flex items-center gap-x-2 mt-8 bg-primary rounded-[5px] pl-3 pr-6 py-2.5'>
        <HiUsers size={22} className='text-white'/>
        <p className='font-intel font-semibold text-white text-base'>Group</p>
      </div>

     
      <div className='flex items-center gap-x-2 mt-8 bg-primary rounded-[5px] pl-3 pr-6 py-2.5'>
        <LuUser2 size={22} className='text-white'/>
        <p className='font-intel font-semibold text-white text-base'>Friends</p>
      </div>

     
      <div className='flex items-center gap-x-2 mt-8 bg-primary rounded-[5px] pl-3 pr-6 py-2.5'>
        <PiUsersThreeFill size={22} className='text-white'/>
        <p className='font-intel font-semibold text-white text-base'>People</p>
      </div>

     

    </div>
  )
}

export default Sidevar