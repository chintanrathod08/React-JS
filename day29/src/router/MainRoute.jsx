import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Product from '../pages/product'
import Signup from '../pages/signup'
import Login from '../pages/login'
import PrivateRoute from '../component/privateRoute'

function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/Product' element={
              <PrivateRoute>
              <Product/>
              </PrivateRoute>
              } ></Route>
            <Route path='/Signup' element={<Signup/>} ></Route>
            <Route path='/Login' element={<Login/>} ></Route>
            <Route path='*' element={<h1>Page Not Found</h1>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoute
