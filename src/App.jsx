import React from 'react'
import Home from './Components/Home/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Fruits from './Components/Fruits/Fruits'
import DAIRY from './Components/Dairy/Dairy'
import Seafood from './Components/Seafood/Seafood'
import AllProducts from './Components/AllProducts/AllProducts'
import Layout from './Components/Layout/Layout'
import Process from './Components/Process/Process'
import Footer from './Components/Footer/Footer'
import Aboutus from './Components/Aboutus/Aboutus'
import Contactus from './Components/Contactus/Contactus'


const App = () => {

   const router = createBrowserRouter([
    {
      path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home />,
      },
         {
      path: '/fruits',
      element: <Fruits />
    },
    {
      path: '/dairy',
      element: <DAIRY />,
    },
    {
      path: '/seafood',
      element: <Seafood />,
    },
    {
      path: '/allproducts',
      element: <AllProducts />,
    },

     { path: '/about', element: <Aboutus /> },
      { path: '/contact', element: <Contactus /> },
      { path: '/process', element: <Process /> },

    ]
    },
 
   ])


 return <RouterProvider router={router} />
}

export default App
