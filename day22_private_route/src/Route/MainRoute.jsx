import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
import Productlist from '../Pages/Productlist'
import PrivateRoute from '../Components/PrivateRoute'

function MainRoute() {
  return (
    <div>
      <Routes>
      
      <Route path='/' element={  <PrivateRoute> <Home/> </PrivateRoute> }  ></Route>
      
      <Route path='/SignUp' element={ <SignUp/> }></Route>
      
      <Route path='/Login' element={ <Login/> }></Route>
      
      <Route path='/Product' element={ <PrivateRoute> <Product/> </PrivateRoute>}> </Route>
      
      <Route path='/Productlist' element={ <Productlist/> }></Route>
      </Routes>
    </div>
  )
}

export default MainRoute
