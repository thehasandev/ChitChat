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
    <>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptate tempora esse odit fuga! Illo nisi beatae tempora facere ut doloribus aut repellat adipisci ullam dicta deleniti modi debitis eos ducimus, nostrum ipsa mollitia temporibus illum esse placeat perspiciatis alias vero voluptatibus. Corporis quo ipsa in id ut quam eos cupiditate aperiam, eum amet commodi accusantium fuga ea placeat deleniti. Porro molestias aperiam praesentium nemo ipsam reprehenderit similique, tempora culpa saepe adipisci animi laudantium consequuntur voluptatibus numquam et dolorum doloribus! Magnam quis rem facere modi aliquam itaque quasi excepturi. Asperiores iure sint ab saepe expedita repellat cumque quod delectus illum?
      {/* <button onClick={handleLogout} className='text-2xl px-4 py-2 bg-green-500 rounded-lg text-white'>Log out</button> */}
    </>
  )
}

export default Home