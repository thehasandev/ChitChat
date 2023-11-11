import React from 'react'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Man from "../assets/pepoles.png"

function Registration() {
  return (
    <>
     <Flex>
       <div className='w-5/12'></div>
       <div className='w-7/12'>
        <Image className="w-full h-screen object-cover" src={Man}/>
        {/* <div className='b'></div> */}
       </div>
     </Flex>

    </>
  )
}

export default Registration