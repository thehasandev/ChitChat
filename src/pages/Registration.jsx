import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Man from "../assets/pepoles.png"

function Registration() {
  return (
    <>
     <Flex>
       <div className='w-5/12 flex justify-center items-center'>
        <div className='w-full pl-10'>
            <h1 className='font-inter font-bold text-3xl text-primary'>Welcome To Ch<span className='text-[#4E4E4E]'>att.</span></h1>
            <h2 className='font-inter font-bold text-2xl text-secondary mt-4'>Sign Up</h2>
            
            <div className='mt-6'>
              <p className='font-inter font-bold text-base text-secondary mb-2'>Full Name</p>
              <input type="text" placeholder='Name here'  className='w-10/12 border border-gray p-3.5 rounded-[5px]'/>
            </div>

            <div className='mt-6'>
              <p className='font-inter font-bold text-base text-secondary mb-2'>Email</p>
              <input type="text" placeholder='Enter your mail'  className='w-10/12 border border-gray p-3.5 rounded-[5px]'/>
            </div>

            <div className='mt-6'>
              <p className='font-inter font-bold text-base text-secondary mb-2'>Password</p>
              <input type="text" placeholder='Password'  className='w-10/12 border border-gray p-3.5 rounded-[5px]'/>
            </div>

            <div className='flex items-center gap-x-2 mt-4'>
             <input type="checkbox" />
              <p className='font-inter font-normal text-base text-[#4E4E4E]'>Remember Me</p>
            </div>

            <button className='w-10/12 rounded-[5px] bg-primary py-3 text-white font-inter font-semibold text-lg mt-7'>Sign Up</button>
            <p className='font-inter font-normal text-[#7A7A7A] text-base mt-6'>Have an account? <span className='text-primary font-semibold'>Sign Up</span></p>
        </div>

       </div>
      
       <div className='w-7/12 relative'>
        <Image className="w-full h-screen object-cover" src={Man}/>
        <div className='bg-black/20 absolute top-0 left-0 w-full h-full'></div>
       </div>
     </Flex>

    </>
  )
}

export default Registration