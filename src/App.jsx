import React, { Component } from 'react'
import Img from './Component/Home/Img/Img'
import About from './Component/About/About'
import Portfolio from './Component/PORTFOLIO/Portfolio'
import Form from './Component/Forem/Form'
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom"
import UserLayuot from './Layuot/UserLayuot/UserLayuot'
let routes = createHashRouter([
  {
    path: '/', element: <UserLayuot />, children: [
      { index: true, element: <Img /> },
      { path: '/Img', element: <Img /> },
      { path: '/LinkBOUT', element: <About /> },
      { path: '/Portfolio', element: <Portfolio /> },
      { path: '/Form', element: <Form /> },
    ]
  },
])

export default class App extends Component {
  render() {
    return (
      <>
        <RouterProvider router={routes} />
       
      </>
    )
  }
}
