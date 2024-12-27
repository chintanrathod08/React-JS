import React from 'react'
import { Routes,Route } from "react-router-dom"
import Index from '../src/pages'
import Login from '../src/pages/login'
import Product from '../src/pages/product'
import Cart from '../src/pages/cart'
import About from '../src/pages/about'
import Singleproduct from '../src/pages/singleproduct'

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Index/>  }></Route>
        <Route path='/about' element={ <About/> } ></Route>
        <Route path="/product" element={ <Product/> }></Route>
        <Route path='/product/:id' element={ <Singleproduct/> } ></Route>
        <Route path="/cart" element={ <Cart/> }></Route>
        <Route path="/login" element={  <Login/> }></Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
