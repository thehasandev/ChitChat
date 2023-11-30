import React, { useEffect, useState } from 'react'

import Image from '../components/Image'
import Flex from "../components/Flex"

import {FaRegEyeSlash} from "react-icons/fa"
import {BsFillEyeFill} from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { Rings } from 'react-loader-spinner'

import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification  } from "firebase/auth";

import Man from "../assets/pepoles.png"
import 'react-toastify/dist/ReactToastify.css';

function Registration() {
  const auth = getAuth();
  const db = getDatabase();

  const navigate = useNavigate()
  const [eye,setEye] = useState(false)
  const [regData,setRegData]  = useState({userName:"",userEmail:"",userPassword:""})
  const [loader,setLoader] =useState(false)

  const userData = useSelector((state)=>state.activeUser.value)
  const [nameError,setNameError] =useState("")
  const [emailError,setEmailError] =useState("")
  const [passwordError,setPasswordError] =useState("")
   
  const handleInputChange =(e)=>{
     setRegData({...regData,[e.target.name]:e.target.value})
  }

  const handleSubmit =()=>{
    const isemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidLength = /^.{6,16}$/
    
   
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
   if(!isValidLength.test(regData.userPassword)){
      setPasswordError("Password must have at Length 6 to 16.")
    }else{
      setPasswordError("")
    }
   }


if(regData.userEmail && regData.userName && regData.userPassword && isemail.test(regData.userEmail) && isValidLength.test(regData.userPassword) ){
  createUserWithEmailAndPassword(auth, regData.userEmail, regData.userPassword)
    .then((userCredential) =>{
      set(ref(db, 'users/'+userCredential.user.uid), {
        userName: regData.userName,
        userEmail:userCredential.user.email,
        userImg : "https://firebasestorage.googleapis.com/v0/b/chitchat-e18bc.appspot.com/o/download.png?alt=media&token=a3957fec-8026-4076-b167-bf5c8d47a9ea"
      });
      setLoader(true)
      setTimeout(() => {
        navigate('/')
      }, 3000);
        sendEmailVerification(auth.currentUser)
        .then(()=>{
    
      });
     
  
      toast.success('Registration sucessfull please varify your email')
      setRegData({userName:"",userEmail:"",userPassword:""})
    })
    .catch((error) => {
      const errorCode = error.code;

    if(errorCode.includes("email")){
      setEmailError("This Email is already used")
    }
    });
}
  }

  useEffect(()=>{
   if(userData != null){
    navigate("/")
   }
  },[])

  return (
    <>
    {
      loader ? 
      <div className='h-[100vh] w-full flex justify-center items-center'>
        <Rings
          height="200"
          width="200"
          color="#4fa94d"
          radius="6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="rings-loading"
        />
      </div>
      :
      <div className='flex flex-col-reverse md:flex-row gap-y-5 justify-center items-center py-8 md:py-0'>
        <div className='md:w-5/12 flex justify-center items-center'>
            <div className='w-full md:pl-10'>
                <h1 className='font-inter hidden md:block font-bold text-3xl text-primary'>Welcome To Ch<span className='text-[#4E4E4E]'>att.</span></h1>
                <h1 className='font-inter md:hidden font-bold text-3xl text-primary text-center mb-8'>Sing Up</h1>
                <p className='font-inter hidden md:block font-normal text-xs text-primary mt-2'>Free register and you can enjoy it</p>
                
                <div className='mt-6'>
                  <p className='font-inter font-bold text-base text-secondary mb-2'>Full Name</p>
                  <input onChange={handleInputChange} type="text" name='userName' value={regData.userName} placeholder='Name here'  className='w-[300px] md:w-10/12 border border-gray p-3.5 rounded-[2px]'/>
                </div>
                <p className='font-inter font-normal text-red-500 text-xs mt-1'>{nameError}</p>

                <div className='mt-6'>
                  <p className='font-inter font-bold text-base text-secondary mb-2'>Email</p>
                  <input onChange={handleInputChange} type="text" name='userEmail' value={regData.userEmail} placeholder='Enter your mail'  className='w-[300px] md:w-10/12 border border-gray p-3.5 rounded-[2px]'/>
                </div>
                <p className='font-inter font-normal text-red-500 text-xs mt-1'>{emailError}</p>

                <div className='mt-6'>
                  <p className='font-inter font-bold text-base text-secondary mb-2'>Password</p>
                  <div className='w-10/12 relative'>
                    <input onChange={handleInputChange} type={`${eye ? "text":"password"}`} name='userPassword' value={regData.userPassword} placeholder='Password'  className='w-[300px] md:w-full border border-gray p-3.5 rounded-[2px]'/>
                    {
                      eye ?
                      <BsFillEyeFill onClick={()=>{setEye(!eye)}} className='absolute top-1/2 -right-8 md:right-5 -translate-y-1/2 text-[#7A7A7A] cursor-pointer'/>
                      :
                      <FaRegEyeSlash onClick={()=>{setEye(true)}} className='absolute top-1/2 -right-8 md:right-5 -translate-y-1/2 text-[#7A7A7A] cursor-pointer'/>

                    }
                  </div>


                  <p className='font-inter font-normal text-red-500 text-xs mt-1'>{passwordError}</p>
                </div>

                <div className='flex items-center gap-x-2 mt-4  '>
                <input type="checkbox" />
                  <p className='font-inter font-normal text-base text-[#4E4E4E]'>Remember Me</p>
                </div>
                <Flex className="justify-center md:justify-start">
                  <button onClick={handleSubmit} className='w-10/12 px-10 rounded-[2px] bg-primary py-3 text-white font-inter font-semibold text-lg mt-7'>Sign Up</button>
                </Flex>
                <p className='font-inter font-normal text-[#7A7A7A] text-base md:text-left text-center mt-6'>Have an account? <Link to="/"><span className='text-primary text-sm font-semibold'>Sign In</span></Link></p>
            </div>

        </div>
        
          <div className='md:w-7/12 relative md:block hidden'>
            <Image className="w-[250px] h-[250px] mx-auto rounded-full md:rounded-none md:w-full  md:h-screen object-cover" src={Man}/>
            <div className='bg-black/20 absolute top-0 left-0 md:w-full md:h-full'></div>
          </div>
      </div>

    }

    </>
  )
}

export default Registration
















