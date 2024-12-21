import { useState } from 'react'

import './App.css'
import MainRouter from './Mainroutes/MainRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MainRouter/>
    </>
  )
}

export default App
