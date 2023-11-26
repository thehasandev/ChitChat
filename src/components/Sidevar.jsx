import React from 'react'
import { TiHome } from "react-icons/ti";
import { FiMessageSquare } from "react-icons/fi";
import { HiUsers } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import Flex from "../components/Flex"
import profile from "../assets/profile.png"

function Sidevar() {
  return (
    <div className=' h-screen bg-white shadow-xl px-8'>
      <Flex className="items-center w-32 gap-x-2 mt-5 ">
        <div>
          <img src={profile} alt="profile" />
        </div>
        <div>
          <h4 className='font-intel font-semibold text-base text-primary '>Paula Mora</h4>
          <p className='font-intel font-normal text-sm text-secondary '>Edit Profile</p>
        </div>

      </Flex>

      <div className='flex w-32 cursor-pointer items-center gap-x-2 mt-16 bg-primary rounded-[5px] pl-3 pr-6 py-2.5'>
        <TiHome size={22} className='text-white'/>
        <p className='font-intel font-semibold text-white text-base'>Home</p>
      </div>

      <div className='flex w-32 cursor-pointer items-center gap-x-2 mt-8 bg-primary rounded-[5px] pl-3 pr-6 py-2.5'>
        <FiMessageSquare size={22} className='text-white'/>
        <p className='font-intel font-semibold text-white text-base'>Chat</p>
      </div>

     
      <div className='flex w-32 cursor-pointer items-center gap-x-2 mt-8 bg-primary rounded-[5px] pl-3 pr-6 py-2.5'>
        <HiUsers size={22} className='text-white'/>
        <p className='font-intel font-semibold text-white text-base'>Group</p>
      </div>

     
      <div className='flex w-32 cursor-pointer items-center gap-x-2 mt-8 bg-primary rounded-[5px] pl-3 pr-6 py-2.5'>
        <LuUser2 size={22} className='text-white'/>
        <p className='font-intel font-semibold text-white text-base'>Friends</p>
      </div>

     
      <div className='flex w-32 cursor-pointer items-center gap-x-2 mt-8 bg-primary rounded-[5px] pl-3 pr-6 py-2.5'>
        <PiUsersThreeFill size={22} className='text-white'/>
        <p className='font-intel font-semibold text-white text-base'>People</p>
      </div>

      <div onClick={handleLogOut} className='flex w-32 cursor-pointer items-center gap-x-2 mt-32  rounded-[5px] pl-3 pr-6 py-2.5'>
        <RiLogoutBoxRFill size={30} className='text-primary'/>
        <p className='font-intel font-semibold text-primary text-sm'>Log Out</p>
      </div>

     

    </div>
  )
}

export default Sidevar