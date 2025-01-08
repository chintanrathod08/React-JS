import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MLT1, MLT2 } from '../redux/actionType'

function Counter2() {

    const data = useSelector((st)=>st.count2)

    const dispatch = useDispatch()
    
  return (
    <div>
       <h1>Counter 2 :- {data}</h1>
       <button onClick={()=>dispatch({type : MLT1})} >SQUER</button> &nbsp;&nbsp;&nbsp;&nbsp;
       <button onClick={()=>dispatch({type : MLT2})} disabled={data <= 2}>REVERSE SQUER</button>
    </div>
  )
}

export default Counter2
