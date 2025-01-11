import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import Home from '../pages/home'
import Product from '../pages/product'
import Signup from '../pages/signup'
import Login from '../pages/login'
import Privateroute from '../components/privateroute'

function MainRoute() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/Product' element={  <Privateroute> <Product/> </Privateroute>} ></Route>
        <Route path='/Signup' element={<Signup/>} ></Route>
        <Route path='/Login' element={<Login/>} ></Route>
        </Routes>
    </div>
  )
}

export default MainRoute