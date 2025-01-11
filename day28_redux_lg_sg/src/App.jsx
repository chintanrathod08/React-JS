import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainRoute from './route/Mainroute'


function App() {
  const [count, setCount] = useState(0)

  return (<>
  <Navbar/>
  <MainRoute/>
  </> )
}

export default App