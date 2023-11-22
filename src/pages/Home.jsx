import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { loggedUser } from '../slices/userSlice';

function Home() {
  const auth = getAuth();
  
  const dispatch =useDispatch()
  const userData = useSelector((state)=>state.activeUser.value)
  const navigate =useNavigate()
 
  const handleLogout =()=>{
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


  return (
    <div>
      <button onClick={handleLogout} className='text-2xl px-4 py-2 bg-green-500 rounded-lg text-white'>Log out</button>
    </div>
  )
}

export default Home