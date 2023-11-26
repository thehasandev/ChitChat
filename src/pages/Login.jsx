import React, { useEffect, useState } from 'react'
import Image from '../components/Image'
import Man from "../assets/pepoles.png"
import {FaRegEyeSlash} from "react-icons/fa"
import {BsFillEyeFill} from "react-icons/bs"
import Goggle from "../assets/g.png"
import Flex from "../components/Flex"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loggedUser } from '../slices/userSlice'
import { BiLogoGoogle } from "react-icons/bi";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify'

function Login() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const [eye,setEye] = useState(false)
  const [logData,setLogData] = useState({userEmail:"",userPassword: ""})
  const userData = useSelector((state)=>state.activeUser.value)

  const [emailError,setEmailError] = useState("")
  const [passwordError,setPasswordError] = useState("")

  const handleInputChange =(e)=>{
    setLogData({...logData,[e.target.name]:e.target.value})
  }


  const handleSubmit =()=>{
    if(!logData.userEmail){
     setEmailError("Please enter a Email")
    }else{
      setEmailError("")
    }
    if(!logData.userPassword){
      setPasswordError("Please enter a Password")
    }else{
      setPasswordError("")
    }

    if(logData.userEmail && logData.userPassword){
      signInWithEmailAndPassword(auth, logData.userEmail, logData.userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loggedUser(user))
        localStorage.setItem("user",JSON.stringify(user))
        
        if(user.emailVerified){
          navigate('/home')
        }else{
          toast("Please verify your email")
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode.includes("login")){
          toast.error('Credentials not Match')
        }
      });
    }
  }

  const handleGoggle =()=>{
   
  signInWithPopup(auth, provider)
    .then((result) => {
     navigate('/home')
    })
  }


  useEffect(()=>{
   if(userData != null){
    navigate("/home")
   }
  },[])


  return (
    <>
     <div className='flex flex-col-reverse items-center md:flex-row gap-y-5 py-8 md:py-0'>
       <div className='md:w-5/12 flex justify-center items-center'>
          <div className='w-full md:pl-10'>
              <h1 className='font-inter hidden md:block font-bold text-3xl text-primary'>Welcome To Ch<span className='text-[#4E4E4E]'>att.</span></h1>
              <h1 className='font-inter md:hidden text-center  font-bold text-3xl text-primary'>Login</h1>
              <div className='md:hidden'>
                <div className='flex text-primary gap-x-4 justify-center my-8'>
                  <BiLogoGoogle size={30}/>
                  <IoLogoFacebook size={30}/>
                  <FaTwitter size={30}/>
                </div>
              </div>

               <div className='hidden md:block'>
                <div onClick={handleGoggle}  className=' flex cursor-pointer mt-4 items-center gap-x-2 border border-gray w-[220px] justify-center rounded-[5px] py-1'>
                  <img className='w-10' src={Goggle} alt="" />
                  <p className='font-inter font-normal text-sm text-primary'>Login with Google</p>
                </div>
               </div>
               
              
              <div className='mt-6'>
                <p className={`font-inter font-bold text-base  mb-2 ${emailError ? "text-[red]":"text-secondary"}`}>Email</p>
                <input value={logData.userEmail} onChange={handleInputChange} name='userEmail' type="email" placeholder='Enter your mail'  className=' w-[300px] md:w-10/12 border border-gray p-3.5 rounded-[2px]'/>
                {
                  emailError &&
                <p className='font-inter font-normal text-[red] text-xs mt-1'>{emailError}</p>
                }
              </div>

              <div className='mt-6'>
                <p className={`font-inter font-bold text-base  mb-2 ${passwordError ? "text-[red]":"text-secondary"}`}>Password</p>
                <div className='w-[300px] md:w-10/12 relative '>
                  <input value={logData.userPassword} onChange={handleInputChange} name='userPassword' type={`${eye ? "text":"password"}`} placeholder='Password'  className='w-[300px] md:w-full border border-gray p-3.5 rounded-[2px]'/>
                  {
                    eye ?
                    <BsFillEyeFill onClick={()=>{setEye(!eye)}} className='absolute top-1/2 right-5 -translate-y-1/2 text-[#7A7A7A] cursor-pointer'/>
                    :
                    <FaRegEyeSlash onClick={()=>{setEye(true)}} className='absolute top-1/2 right-5 -translate-y-1/2 text-[#7A7A7A] cursor-pointer'/>
                  }
                  {
                    passwordError &&
                  <p className='font-inter font-normal text-[red] text-xs mt-1'>{passwordError}</p>
                  }
          

                </div>
              </div>
              
            <Flex className="justify-between items-center w-[300px] md:w-10/12 mt-4 ">
              <div className='flex items-center gap-x-2  '>
                <input type="checkbox" />
                <p className='font-inter font-normal text-sm md:text-base text-[#4E4E4E]'>Remember Me</p>
              </div>

                <Link to="/forgot">
                  <p className='font-inter font-normal text-sm md:text-base text-primary'>Forgot Password?</p>
                </Link>
             

            </Flex>
            <Flex className="justify-center md:justify-start">
              <button onClick={handleSubmit} className='w-[300px] md:w-10/12 rounded-[2px] bg-primary py-3 text-white font-inter font-semibold text-lg mt-7'>Log in</button>
            </Flex>
              <p className='font-inter font-normal text-[#7A7A7A] text-xs md:text-base mt-6'>Dont’t have an account? <Link to="/sing-up"><span className='text-primary md:text-sm font-semibold'>Sign Up</span></Link></p>
             
             <div className='md:hidden relative'>
              <Flex className="justify-center md:justify-start mt-8">
                <button onClick={handleSubmit} className='w-[300px] md:w-10/12 rounded-[2px] bg-sky-500 py-3 text-white font-inter font-normal text-sm '>Singin With Goggle</button>
              </Flex>
              <BiLogoGoogle size={25} className='absolute top-1/2 text-white -translate-y-1/2 left-2'/>
             </div>

          </div>

       </div>
      
       <div className='md:w-7/12 relative hidden md:block'>
        <Image className="w-[250px] h-[250px] mx-auto rounded-full md:rounded-none md:w-full  md:h-screen object-cover" src={Man}/>
        <div className='bg-black/20 absolute top-0 left-0 md:w-full md:h-full'></div>
       </div>
     </div>
    </>
  )
}

export default Login