import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

function Home() {
  const auth = getAuth();
  const navigate =useNavigate()
  
  const handleLogout =()=>{

    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {  
    });
   
  }
  return (
    <div>
      <button onClick={handleLogout} className='text-2xl px-4 py-2 bg-green-500 rounded-lg text-white'>Log out</button>
    </div>
  )
}

export default Home