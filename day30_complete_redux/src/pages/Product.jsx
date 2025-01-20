import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { proFetch } from '../redux/ProductReducer/action';

function Product() {

    const data = useSelector((st)=>st) 
    console.log(data);
    
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(proFetch)
    },[])

  return (
    <div>
      <h1>Product</h1>
    </div>
  )
}

export default Product