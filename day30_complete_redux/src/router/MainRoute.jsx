import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

function MainRoute() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/product' element={<Product/>} ></Route>
          <Route path='/signup' element={<SignUp/>} ></Route>
          <Route path='/login' element={<Login/>} ></Route>
      </Routes>
    </div>
  )
}

export default MainRoute
