import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainrouter from './routes/mainrouter'
import Header from './components/header'

function App() {
  
  return (
    <>
      <Header/>
      <Mainrouter/>
    </>
  )
}

export default App
