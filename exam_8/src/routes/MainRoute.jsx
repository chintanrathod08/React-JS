import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import StudentForm from '../components/StudentForm'
import Studentlist from '../components/Studentlist'
import StudentDetails from '../components/StudentDetails'


function MainRoute() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Navbar/>} ></Route>
          <Route path='/Stform' element={<StudentForm/>} ></Route>
          <Route path='/Stlist' element={<Studentlist/>} ></Route>
          <Route path='/Stdetails' element={<StudentDetails/>} ></Route>
      </Routes>
    </div>
  )
}

export default MainRoute