import React from 'react'
import {RouterProvider} from "react-router-dom";

import Route from './routes/Route';

function App() {
  return (
    <RouterProvider router={Route}/>
      
  )
}

export default App