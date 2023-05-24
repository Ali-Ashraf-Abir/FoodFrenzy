import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from '../Pages/Home';
import Menu from '../Pages/Menu/Menu';

import OurShop from '../Pages/OurShop/OurShop';
import Main from './Layout/Main';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
          {
              path: '/',
              element:<Home></Home>,
              
          },
          {
            path:'/menu',
            element:<Menu></Menu>
          },
          {
            path:'/order',
            element:<OurShop></OurShop>
          }
      ]
    },
  ]);


export default router;