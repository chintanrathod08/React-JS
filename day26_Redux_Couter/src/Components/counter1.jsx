import { useDispatch, useSelector } from 'react-redux'
import {  DEC1,  INC1 } from '../Redux/actionType';
import { useState } from 'react';

function Counter1() {

    const Data = useSelector((Store)=>Store.ctr1)
    console.log(Data);

    

    const dispatch = useDispatch()

    const hlInc1 =()=>{
        dispatch({type : INC1})
    }

    const hlDec1 =()=>{
        dispatch({type : DEC1})
    }

    return (
    <div>
        <h1>Counter 1 :- {Data}</h1>
        <button onClick={hlInc1} >+</button> &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={hlDec1} disabled={Data <= 0} >-</button>
    </div>
  )
}

export default Counter1
