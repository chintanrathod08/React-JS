// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { LOADING, SUCCESS } from '../redux/ProductReducer/actionType'
import { proFetch } from '../redux/ProductReducer/action'

function Product() {

    const data = useSelector((st)=>st)
    console.log(data.isLoading);
    
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(proFetch)
    },[])

  return (
    <div className='grid grid-cols-3 gap-[5%]' >
        {
            data.isLoading ? <center> <h1 className='ms-[100%]'>LOADING.....</h1> </center> : 
            
            data.prodata.map((e)=>{
                return <div key={e.id}>
                         <center>
                          <img src={e.images} alt="" width="200px" />
                    <h2>{e.title}</h2>
                    <p>{e.price}</p>
                    <p>{e.category}</p> </center>
                </div>
            })
        }

        
    </div>
  )
}

export default Product
