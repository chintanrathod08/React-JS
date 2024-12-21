import React from 'react'
import { Route, Routes } from "react-router-dom"
import Index from '../Pages'
import Product from '../Pages/Product'
import Login from '../Pages/Login'

function MainRouter() {
  return (
    <div>
        <Routes>
           <Route path='Index' element={ <Index/> } ></Route>
           <Route path='Product' element={ <Product/> } ></Route>
           <Route path='Login' element={ <Login/> } ></Route>
        </Routes>
    </div>
  )
}

export default MainRouter
