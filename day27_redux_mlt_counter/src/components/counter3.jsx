import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INPUT } from '../redux/actionType'

function Counter3() {

    const [user,setUser] = useState("")

    const data = useSelector(st=>st.count3)

    const dispatch1 = useDispatch()
    
   const hlChange=(e)=>{
    const{value}= e.target
    setUser(value)
   }

    const hlSubmit=(e)=>{
        e.preventDefault()
        dispatch1({type : INPUT, payload: Number (user) })
        console.log(user);
    }

  return (
    <div>
        <form action="" onSubmit={hlSubmit}>
           <h1> {data} </h1>
            <input type="number" id='int1' placeholder='Enter Number' onChange={hlChange} /> 
            <input type="submit" id='int2'disabled={ user <= 0 }  />
        </form>
    </div>
  )
}

export default Counter3
