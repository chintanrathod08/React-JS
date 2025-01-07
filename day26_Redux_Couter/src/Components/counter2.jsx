import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DEC2, INC2 } from '../Redux/actionType';

function Counter2() {

    const Data = useSelector((Store)=>Store.ctr2)
    console.log(Data);

    const dispatch = useDispatch() 

    const hlInc2 =()=>{
        dispatch({type : INC2})
    }

    const hlDec2 =()=>{
        dispatch({type : DEC2})
    }


  return (
    <div>
      <h1>Counter 2 :- {Data}</h1>
      <button onClick={hlInc2} >+</button> &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={hlDec2}  disabled={Data <= 0} >-</button>
    </div>
  )
}

export default Counter2
