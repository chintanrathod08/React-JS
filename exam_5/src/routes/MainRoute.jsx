import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Product from '../pages/product'
import Productlist from '../pages/productlist'
import Signup from '../pages/signup'
import Login from '../pages/login'
import Privateroute from '../components/privateroute'
import Editeform from '../pages/editeform'

function MainRoute() {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Home/>}></Route>
            <Route path='/product' element={ <Privateroute> <Product/> </Privateroute> }  ></Route>
            <Route path='/productlist' element={ <Productlist/>  }  ></Route>
            <Route path='/signup' element={ <Signup/> }  ></Route>
            <Route path='/login' element={ <Login/> }  ></Route>
            <Route path='/editeform/:edid' element={ <Editeform/> } ></Route>
        </Routes>
    </div>
  )
}

export default MainRoute
