import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import Flex from './Flex';
import Image from "../components/Image"
import c1 from "../assets/g1.png"
import c2 from "../assets/c2.png"

function GroupMessage() {
  return (
    <div className='w-[384px] h-[505px] p-5 bg-white shadow-lg rounded-[10px] m-5 overflow-y-scroll box'>
     <h2 className='flex font-inter font-semibold text-2xl text-secondary justify-between items-center'>Chat <span><BsThreeDotsVertical/></span></h2>
      <div className='relative mt-5'>
        <input type="text" placeholder='Search' className='w-full border border-solid border-black/50  pl-10 py-1.5 rounded-[5px]' />
        <IoSearchOutline size={20} className='absolute top-1/2 -translate-y-1/2 left-2'/>
      </div>

      <div className='mt-6'>

       <Flex className="justify-between mb-4">
         <Flex className="items-center gap-x-4">
          <div>
            <Image src={c1}/>
          </div>
          <div>
            <h2 className='font-inter font-semibold text-lg text-secondary'>Big Kahuna Burger Ltd.</h2>
            <p className='font-inter font-normal text-sm text-offwhite'>Hi Everyone.....</p>
          </div>
         </Flex>
         <p className='font-inter font-normal text-xs text-offwhite'>10:30 PM</p>
       </Flex> 


      </div>
    </div>
  )
}

export default GroupMessage