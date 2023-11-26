import React from 'react'
import { createBrowserRouter} from "react-router-dom";

import Home from '../pages/Home';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import Forgot from '../pages/Forgot';
import Sidevar from '../components/Sidevar';
import Rootlayouts from '../components/Rootlayouts';
import Chat from '../pages/Chat';
import Group from '../pages/Group';
import People from '../pages/People';
import Friends from '../pages/Friends';

const Route = createBrowserRouter([
    {
      path: "/home",
      element: <Rootlayouts/>,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/home/chat",
          element: <Chat />,
        },
        {
          path: "/home/group",
          element: <Group />,
        },
        {
          path: "/home/people",
          element: <People />,
        },
        {
          path: "/home/friends",
          element: <Friends />,
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