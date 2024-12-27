import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../pages'
import Men from '../pages/men'
import Women from '../pages/women'

function MainRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Index/> } ></Route>
        <Route path='/men' element={ <Men/> } ></Route>
        <Route path='/women' element={ <Women/> } ></Route>
        <Route path='/kids' element={}></Route>
        <Route path='/' element={}></Route>
        <Route path='/' element={}></Route>
        <Route path='/' element={}></Route>
        <Route path='/' element={}></Route>
        <Route path='/' element={}></Route>
      </Routes>
    </div>
  )
}

export default MainRoute
