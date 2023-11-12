import React, { useState } from 'react'
import Image from '../components/Image'
import Man from "../assets/pepoles.png"
import {FaRegEyeSlash} from "react-icons/fa"
import {BsFillEyeFill} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function Registration() {
  const auth = getAuth();
  let [eye,setEye] = useState(false)
  let [regData,setRegData]  = useState({userName:"",userEmail:"",userPassword:""})
 
  let [nameError,setNameError] =useState("")
  let [emailError,setEmailError] =useState("")
  let [passwordError,setPasswordError] =useState("")
   
  let handleInputChange =(e)=>{
     setRegData({...regData,[e.target.name]:e.target.value})
  }

  let handleSubmit =()=>{

    let isemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let isLowercase = /^(?=.*[a-z]).*$/
    let isNumber = /^(?=.*[0-9]).*$/
    let isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/
    let isValidLength = /^.{6,16}$/
    let isPassword   = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/
   
    
   if(!regData.userName){
    setNameError("Please enter a Name")
   }else{
    setNameError("")
   }

   if(!regData.userEmail){
    setEmailError("Please enter a Email")
   }else{
    if(!isemail.test(regData.userEmail)){
      setEmailError("Please enter a Valid Email")
    }else{
      setEmailError("")
    }
   }

   if(!regData.userPassword){
    setPasswordError("Please enter a Password")
   }else{
    if(!isLowercase.test(regData.userPassword)){
      setPasswordError("Password must have at least one Lowercase Character.")
    }else if(!isNumber.test(regData.userPassword)){
      setPasswordError("Password must have at Number.")
    }else if(!isContainsSymbol.test(regData.userPassword)){
      setPasswordError("Password must have at least one Contins Symbol.")
    }else if(!isValidLength.test(regData.userPassword)){
      setPasswordError("Password must have at Length 6 to 16.")
    }else{
      setPasswordError("")
    }
   }


if(regData.userEmail && regData.userName && regData.userPassword && isemail.test(regData.userEmail) && isPassword.test(regData.userPassword) ){
  createUserWithEmailAndPassword(auth, regData.userEmail, regData.userPassword)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      toast.success('Sing-in sucessfull')
    })
    .catch((error) => {
      const errorCode = error.code;
     
    if(errorCode.includes("email")){
      setEmailError("This Email is already used")
    }
    });
}
    

  }

  return (
    <>
     <div className='flex flex-col-reverse md:flex-row gap-y-5 py-8 md:py-0'>
       <div className='md:w-5/12 flex justify-center items-center'>
          <div className='w-full pl-10'>
              <h1 className='font-inter font-bold text-3xl text-primary'>Welcome To Ch<span className='text-[#4E4E4E]'>att.</span></h1>
              <p className='font-inter font-normal text-xs text-primary mt-2'>Free register and you can enjoy it</p>
              
              <div className='mt-6'>
                <p className='font-inter font-bold text-base text-secondary mb-2'>Full Name</p>
                <input onChange={handleInputChange} type="text" name='userName' value={regData.userName} placeholder='Name here'  className='w-10/12 border border-gray p-3.5 rounded-[5px]'/>
              </div>
              <p className='font-inter font-normal text-[red] text-xs mt-1'>{nameError}</p>

              <div className='mt-6'>
                <p className='font-inter font-bold text-base text-secondary mb-2'>Email</p>
                <input onChange={handleInputChange} type="text" name='userEmail' value={regData.userEmail} placeholder='Enter your mail'  className='w-10/12 border border-gray p-3.5 rounded-[5px]'/>
              </div>
              <p className='font-inter font-normal text-[red] text-xs mt-1'>{emailError}</p>

              <div className='mt-6'>
                <p className='font-inter font-bold text-base text-secondary mb-2'>Password</p>
                <div className='w-10/12 relative'>
                  <input onChange={handleInputChange} type={`${eye ? "text":"password"}`} name='userPassword' value={regData.userPassword} placeholder='Password'  className='w-full border border-gray p-3.5 rounded-[5px]'/>
                  {
                    eye ?
                    <BsFillEyeFill onClick={()=>{setEye(!eye)}} className='absolute top-1/2 right-5 -translate-y-1/2 text-[#7A7A7A] cursor-pointer'/>
                    :
                    <FaRegEyeSlash onClick={()=>{setEye(true)}} className='absolute top-1/2 right-5 -translate-y-1/2 text-[#7A7A7A] cursor-pointer'/>

                  }
                </div>
                <p className='font-inter font-normal text-[red] text-xs mt-1'>{passwordError}</p>
              </div>

              <div className='flex items-center gap-x-2 mt-4  '>
              <input type="checkbox" />
                <p className='font-inter font-normal text-base text-[#4E4E4E]'>Remember Me</p>
              </div>

              <button onClick={handleSubmit} className='w-10/12 rounded-[5px] bg-primary py-3 text-white font-inter font-semibold text-lg mt-7'>Sign Up</button>
              <p className='font-inter font-normal text-[#7A7A7A] text-base mt-6'>Have an account? <Link to="/"><span className='text-primary font-semibold'>Sign In</span></Link></p>
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

export default Registration
















