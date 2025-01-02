import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainroute from './routes/mainroute'
import Navbar from './component/navbar'

function App() {

  return (
    <>
      <Navbar />
      <Mainroute />
    </>
  )
}

export default App
