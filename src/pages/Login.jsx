import React, { useState } from 'react'
import Image from '../components/Image'
import Man from "../assets/pepoles.png"
import {FaRegEyeSlash} from "react-icons/fa"
import {BsFillEyeFill} from "react-icons/bs"
import Goggle from "../assets/g.png"
import Flex from "../components/Flex"
import { Link } from 'react-router-dom'


function Login() {
  let [eye,setEye] = useState(false)
  return (
    <>
     <div className='flex flex-col-reverse md:flex-row gap-y-5 py-8 md:py-0'>
       <div className='md:w-5/12 flex justify-center items-center'>
          <div className='w-full pl-10'>
              <h1 className='font-inter font-bold text-3xl text-primary'>Welcome To Ch<span className='text-[#4E4E4E]'>att.</span></h1>
               <div className='flex mt-4 items-center gap-x-2 border border-gray w-[220px] justify-center rounded-[5px] py-1'>
                 <img className='w-10' src={Goggle} alt="" />
                 <p className='font-inter font-normal text-sm text-primary'>Login with Google</p>
               </div>
              
              <div className='mt-6'>
                <p className='font-inter font-bold text-base text-secondary mb-2'>Email</p>
                <input type="email" placeholder='Enter your mail'  className='w-10/12 border border-gray p-3.5 rounded-[5px]'/>
              </div>

              <div className='mt-6'>
                <p className='font-inter font-bold text-base text-secondary mb-2'>Password</p>
                <div className='w-10/12 relative'>
                  <input type={`${eye ? "text":"password"}`} placeholder='Password'  className='w-full border border-gray p-3.5 rounded-[5px]'/>
                 
                  {
                    eye ?
                    <BsFillEyeFill onClick={()=>{setEye(!eye)}} className='absolute top-1/2 right-5 -translate-y-1/2 text-[#7A7A7A] cursor-pointer'/>
                    :
                    <FaRegEyeSlash onClick={()=>{setEye(true)}} className='absolute top-1/2 right-5 -translate-y-1/2 text-[#7A7A7A] cursor-pointer'/>
                  }

                </div>
              </div>
              
            <Flex className="justify-between items-center w-10/12 mt-4 ">
              <div className='flex items-center gap-x-2  '>
                <input type="checkbox" />
                <p className='font-inter font-normal text-sm md:text-base text-[#4E4E4E]'>Remember Me</p>
              </div>

                <Link to="/forgot">
                  <p className='font-inter font-normal text-sm md:text-base text-primary'>Forgot Password?</p>
                </Link>
             

            </Flex>

              <button className='w-10/12 rounded-[5px] bg-primary py-3 text-white font-inter font-semibold text-lg mt-7'>Log in</button>
              <p className='font-inter font-normal text-[#7A7A7A] text-base mt-6'>Dont’t have an account? <Link to="/sing-up"><span className='text-primary font-semibold'>Sign Up</span></Link></p>
          </div>

       </div>
      
       <div className='md:w-7/12 relative'>
        <Image className="w-[250px] h-[250px] mx-auto rounded-full md:rounded-none md:w-full  md:h-screen object-cover" src={Man}/>
        <div className='bg-black/20 absolute top-0 left-0 md:w-full md:h-full'></div>
       </div>
     </div>

    </>
  )
}

export default Login