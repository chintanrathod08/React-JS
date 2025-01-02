import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages'
import Men from '../pages/men'
import Women from '../pages/women'
import Kids from '../pages/kids'
import Home_living from '../pages/home_living'
import Beauty from '../pages/beauty'
import Studio from '../pages/studio'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Cart from '../pages/cart'


function Mainrouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Index/> } ></Route>
        <Route path='/men' element={ <Men/>  } ></Route>
        <Route path='/women' element={ <Women/>  } ></Route>
        <Route path='/kids' element={ <Kids/> } ></Route>
        <Route path='/home_living' element={ <Home_living/> } ></Route>
        <Route path='/beauty' element={ <Beauty/>  } ></Route>
        <Route path='/studio' element={ <Studio/>  } ></Route>
        <Route path='/login' element={ <Login/>  } ></Route>
        <Route path='/signup' element={ <Signup/>  } ></Route>
        <Route path='/cart' element={ <Cart/> } ></Route>
      </Routes>
    </div>
  )
}

export default Mainrouter
