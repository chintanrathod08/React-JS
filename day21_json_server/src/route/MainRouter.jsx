import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Productlist from '../pages/Productlist'

function MainRouter() {
  return (
    <div>
      <Routes>
          <Route path='/' element={
             <PrivateRoute>
               <Home/> 
             </PrivateRoute>
             } ></Route>
          <Route path='/Signup' element={<Signup/>} ></Route>
          <Route path='/Login' element={<Login/>} ></Route>
          <Route path='/Product' element={
             <PrivateRoute>
              <Product/> 
             </PrivateRoute>
             } ></Route>
          <Route path='/Productlist' element={ <Productlist/> } ></Route>
      </Routes>
    </div>
  )
}

export default MainRouter
