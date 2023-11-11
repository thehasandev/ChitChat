import React from 'react'
import { createBrowserRouter} from "react-router-dom";

import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/sing-up",
      element: <Registration/>,
    },
    {
      path: "/log-in",
      element: <Login/>,
    },
  ]);

  export default Route