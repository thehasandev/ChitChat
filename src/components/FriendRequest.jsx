import React, { useEffect, useState } from 'react'

import Flex from './Flex';
import Image from "../components/Image"

import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import c1 from "../assets/fr.png"
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';

function FriendRequest() {
  const db = getDatabase();
  const userData = useSelector((state) => state.activeUser.value)
  const [friendrequestList, setFriendrequestList] = useState([])


  useEffect(() => {
    const freiendrequestRef = ref(db, 'friendrequest');
    onValue(freiendrequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (item.val().whoreciveid == userData.uid) {
          arr.push(item.val())
        }

      })
      setFriendrequestList(arr)
    });

  }, [])

  return (
    <div className='w-[384px] h-[505px] p-5 bg-white shadow-lg rounded-[10px] m-5'>
      <h2 className='flex font-inter font-semibold text-2xl text-secondary justify-between items-center'>Friend Request <span><BsThreeDotsVertical /></span></h2>
      <div className='relative mt-5'>
        <input type="text" placeholder='Search' className='w-full border border-solid border-black/50  pl-10 py-1.5 rounded-[5px]' />
        <IoSearchOutline size={20} className='absolute top-1/2 -translate-y-1/2 left-2' />
      </div>

      <div className='mt-6 overflow-y-scroll box h-[368px] pr-4 '>
        {
          friendrequestList.map((item) => (
            <Flex className="justify-between mb-4">
              <Flex className="items-center gap-x-4">
                <div>
                  <Image src={c1} />
                </div>
                <div>
                  <h2 className='font-inter font-semibold text-lg text-secondary'>{item.whosendname}</h2>
                </div>
              </Flex>
              <div>
                <div>
                  <button className='font-inter font-medium text-sm px-2 py-1 bg-primary text-white rounded-[2px]'>Confirm</button>
                </div>
                <div>
                  <button className='font-inter font-medium text-sm px-2 py-1  text-secondary rounded-[2px]'>Cancel</button>
                </div>

              </div>
            </Flex>
          ))
        }














      </div>
    </div>
  )
}

export default FriendRequest