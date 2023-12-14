import React, { useEffect } from 'react'
import { TiHome } from "react-icons/ti";
import { FiMessageSquare } from "react-icons/fi";
import { HiUsers } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import Flex from "../components/Flex"
import Modal from 'react-modal';

import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { loggedUser } from '../slices/userSlice';


Modal.setAppElement('#root');

function Sidevar() {
  const auth = getAuth();
  
  const dispatch =useDispatch()
  const userData = useSelector((state)=>state.activeUser.value)



  const navigate =useNavigate()

  let handleLogOut=()=>{
    signOut(auth).then(() => {
      localStorage.removeItem("user")
      dispatch(loggedUser(null))
      navigate("/")
    }).catch((error) =>{  
    });
  }

  useEffect(()=>{
    if(userData == null){
      navigate("/")
    }
  },[])


  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div>
    <div className=' h-screen bg-white shadow-xl px-8'>
      <Flex className="items-center w-32 gap-x-2 mt-5 ">
        <div>
        <img onClick={openModal} src={userData.photoURL} alt="profile" className='w-9 h-9 rounded-full'/>
        </div>
        <div>
          <h4 className='font-intel font-semibold text-base text-primary '>{userData.displayName}</h4>
          <p className='font-intel font-normal text-sm text-[#444444] '>Edit Profile</p>
        </div>

      </Flex>

      <Link to="/home">
        <div className={`flex w-32 cursor-pointer items-center gap-x-2 mt-16  rounded-[5px] pl-3 pr-6 py-2.5 ${window.location.pathname == "/home" ? "bg-primary text-white" : "bg-transparent text-secondary"}`}>
          <TiHome size={22} />
          <p className='font-intel font-semibold  text-base'>Home</p>
        </div>
      </Link>

      <Link to="/home/chat">
        <div className={`flex w-32 cursor-pointer items-center gap-x-2 mt-8  rounded-[5px] pl-3 pr-6 py-2.5 ${window.location.pathname == "/home/chat" ? "bg-primary text-white" : "bg-transparent text-secondary"}`}>
          <FiMessageSquare size={22} />
          <p className='font-intel font-semibold  text-base'>Chat</p>
        </div>
      </Link>

      <Link to="/home/group">
        <div className={`flex w-32 cursor-pointer items-center gap-x-2 mt-8   rounded-[5px] pl-3 pr-6 py-2.5 ${window.location.pathname == "/home/group" ? "bg-primary text-white" : "bg-transparent text-secondary"}`}>
          <HiUsers size={22}/>
          <p className='font-intel font-semibold  text-base'>Group</p>
        </div>
      </Link>

      <Link to="/home/friends">
        <div className={`flex w-32 cursor-pointer items-center gap-x-2 mt-8  rounded-[5px] pl-3 pr-6 py-2.5 ${window.location.pathname == "/home/friends" ? "bg-primary text-white" : "bg-transparent text-secondary"}`}>
          <LuUser2 size={22}/>
          <p className='font-intel font-semibold  text-base'>Friends</p>
        </div>
      </Link>

      <Link to="/home/people">
        <div className={`flex w-32 cursor-pointer items-center gap-x-2 mt-8  rounded-[5px] pl-3 pr-6 py-2.5 ${window.location.pathname == "/home/people" ? "bg-primary text-white" : "bg-transparent text-secondary"}`}>
          <PiUsersThreeFill size={22} />
          <p className='font-intel font-semibold  text-base'>People</p>
        </div>
      </Link>

      <div onClick={handleLogOut} className='flex w-32 cursor-pointer items-center gap-x-2 mt-32  rounded-[5px] pl-3 pr-6 py-2.5'>
        <RiLogoutBoxRFill size={30} className='text-primary'/>
        <p className='font-intel font-semibold text-primary text-sm'>Log Out</p>
      </div>

    </div>

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="h-44 w-96 absolute top-1/2 left-1/2 border-[gray] -translate-x-1/2 -translate-y-1/2 bg-white border-2 px-5 py-6"
      >
       
       
        <h1 className='font-inter text-2xl font-semibold'>Update Your Profile</h1>
        <input type="file" className='my-4  file:border-0 file:bg-[gray] file:text-base file:font-semibolda file:text-inter file:text-white file:px-4 file:rounded-[2px]  file:py-1 '/>

        
    </Modal>
    </div>
  )
}

export default Sidevar