import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from '../pages/home'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Product from '../pages/product'
import Productlist from '../pages/productlist'
import Privateroute from '../component/privateroute'

function Mainroute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/product' element={<Privateroute><Product/></Privateroute>}></Route>
            <Route path='/productlist' element={<Productlist/>}></Route>
            
        </Routes>
    </div>
  )
}

export default Mainroute