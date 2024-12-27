import { useState } from 'react'
import './App.css'
import MainRoute from './MainRoutes/MainRoute'
import Header from './components/header'

function App() {
   return (
    <>
       <Header/>
      <MainRoute/>
    </>
  )
}

export default App
