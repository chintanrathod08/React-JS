import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Product from '../pages/Product'

function MainRouter() {
  return (
    <div>
      <Routes>
          <Route path='/' element={ <Home/> } ></Route>
          <Route path='/Signup' element={<Signup/>} ></Route>
          <Route path='/Login' element={<Login/>} ></Route>
          <Route path='/Product' element={ <Product/> } ></Route>
      </Routes>
    </div>
  )
}

export default MainRouter
