import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const [T, setT] = useState(10)


  let Add = useMemo(  () => {

    console.log(T);
    return T

  },[T])

  function ss() {
    console.log(count)
  }

  return (
    <>
      <h1> {Add }  </h1>
      <h2>  {T} </h2>

      <button  onClick={()=>  setT(T+2) } >  Click 1</button> &nbsp;

      <button onClick={() => ss(setCount(count + 1))} > Click 2 </button>
    </>
  )
}

export default App