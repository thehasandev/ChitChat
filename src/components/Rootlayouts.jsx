import React from 'react'
import Sidevar from './Sidevar'
import { Outlet } from 'react-router-dom'
import Flex from "../components/Flex"

function Rootlayouts() {
  return (
    <Flex>
        <Sidevar/>
        <Outlet/>
    </Flex>
  )
}

export default Rootlayouts