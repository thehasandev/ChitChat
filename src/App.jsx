import React from 'react'
import {RouterProvider} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Route from './routes/Route';
import "./App.css"

function App() {
  return (
    <>
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    <RouterProvider router={Route}/>
    </>
      
  )
}

export default App