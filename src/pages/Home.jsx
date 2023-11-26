import React from 'react'

import Flex from "../components/Flex"
import Message from '../components/Message'
import GroupMessage from '../components/GroupMessage'
import Friend from '../components/Friend'
import Peopels from '../components/Peopels'
import FriendRequest from '../components/FriendRequest'
import Block from '../components/Block'
function Home() {
  return (
    <Flex>
       <Message/>
       <GroupMessage/>
       <Friend/>
       <Peopels/>
       <FriendRequest/>
       <Block/>
    </Flex>
  )
}

export default Home