import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './component/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUp/>
    </>
  )
}

export default App
