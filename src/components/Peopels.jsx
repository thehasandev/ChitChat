import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import Flex from './Flex';
import Image from "../components/Image"
import c1 from "../assets/p1.png"
import { getDatabase, ref, onValue } from "firebase/database";



function Peopels() {
  const [userList,setUserList]= useState([])
  const [searchUserList,setSearchUserList]= useState([])
  const db = getDatabase();
  const [input,setInput] = useState("")

  useEffect(()=>{
    const userRef = ref(db, 'users');
      onValue(userRef, (snapshot) => {
        let arr =[]
         snapshot.forEach((item)=>{
            arr.push(item.val());
         })
         setUserList(arr)
      });
  },[])

  let handleUserChange =(e)=>{
     setInput(e.target.value)
    let filterData = userList.filter((item)=>item.userName.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchUserList(filterData);
  }
  return (
    <div className='w-[384px] h-[505px] p-5 bg-white shadow-lg rounded-[10px] m-5'>
     <h2 className='flex font-inter font-semibold text-2xl text-secondary justify-between items-center'>People <span><BsThreeDotsVertical/></span></h2>
      <div className='relative mt-5'>
        <input onChange={handleUserChange} type="text" placeholder='Search' className='w-full border border-solid border-black/50  pl-10 py-1.5 rounded-[5px]' />
        <IoSearchOutline size={20} className='absolute top-1/2 -translate-y-1/2 left-2'/>
      </div>

      <div className='mt-6 overflow-y-scroll box h-[368px] pr-4 '>
      
      {
        input.length>0 ?
        
          searchUserList.length>0 ?
  
          searchUserList.map((item)=>(
            <Flex className="justify-between items-center mb-4">
              <Flex className="items-center gap-x-4">
                <div>
                  <Image className="w-10 h-10 rounded-full" src={item.userImg}/>
                </div>
                <div>
                  <h2 className='font-inter font-semibold text-lg text-secondary'>{item.userName}</h2>
                </div>
              </Flex>
              <button className='font-inter font-normal text-sm bg-primary px-2 py-2 rounded-[2px] text-white'>Add Friend</button>
            </Flex> 
          ))
          :
         <h1>Result Not Fount</h1>  
        
        :

        userList.map((item)=>(
          <Flex className="justify-between items-center mb-4">
            <Flex className="items-center gap-x-4">
              <div>
                <Image className="w-10 h-10 rounded-full" src={item.userImg}/>
              </div>
              <div>
                <h2 className='font-inter font-semibold text-lg text-secondary'>{item.userName}</h2>
              </div>
            </Flex>
            <button className='font-inter font-normal text-sm bg-primary px-2 py-2 rounded-[2px] text-white'>Add Friend</button>
          </Flex> 
        ))

      }



     </div>
    </div>
  )
}

export default Peopels