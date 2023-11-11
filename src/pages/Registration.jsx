import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Man from "../assets/pepoles.png"

function Registration() {
  return (
    <>
     <Flex>
       <div className='w-5/12'>
        <h1 className='font-inter'>sdfds</h1>
       </div>
      
       <div className='w-7/12 relative'>
        <Image className="w-full h-screen object-cover" src={Man}/>
        <div className='bg-black/20 absolute top-0 left-0 w-full h-full'></div>
       </div>
     </Flex>

    </>
  )
}

export default Registration