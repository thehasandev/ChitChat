import React, { useState } from 'react'
import {AiOutlineMail} from "react-icons/ai"
import { Link } from 'react-router-dom'

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function Forgot() {
  const auth = getAuth();
  const [email,setEmail] = useState("")

  const handleForgot =()=>{
    sendPasswordResetEmail(auth, email)
    .then(() => {
     setEmail("")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  return (
    <div className='h-screen w-full bg-primary/50 flex justify-center items-center'>
      <div className='w-[350px] md:w-96  bg-white py-16 shadow-lg rounded-[10px]'>
         <h1 className='font-inter font-bold text-primary text-center text-3xl mb-2'>Forget Password</h1>
         <p className='font-inter font-normal text-primary text-center text-sm mb-4'>You can reset your Password</p>
         <div className='w-10/12 mx-auto relative'>
           <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Enter your mail'  className='w-full border border-gray p-3.5 rounded-[5px]'/>
           <div className='bg-primary h-full w-12 absolute top-0 right-0 rounded-r-[8px] flex justify-center items-center'>
            <AiOutlineMail size={25} className='text-white'/>
           </div>
         </div>
         <div className='flex justify-center gap-x-4 w-10/12 mx-auto mt-8'>
            <button onClick={handleForgot} className='px-4 cursor-pointer rounded-[5px] bg-primary py-3 text-white font-inter font-medium text-base '>Reset</button>
            <Link to="/">
              <button className='px-4 rounded-[5px] bg-primary py-3 text-white font-inter font-medium text-base '>Back to Login</button>
            </Link>
         </div>
      </div>
    </div>
  )
}

export default Forgot