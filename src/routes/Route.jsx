import React from 'react'
import { createBrowserRouter} from "react-router-dom";

import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Forgot from '../pages/Forgot';
import Sidevar from '../components/Sidevar';
import Rootlayouts from '../components/Rootlayouts';

const Route = createBrowserRouter([
    {
      path: "/home",
      element: <Rootlayouts/>,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
      ],
    },
    {
      path: "/sing-up",
      element: <Registration/>,
    },
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/forgot",
      element: <Forgot/>,
    },
  ]);

  export default Route