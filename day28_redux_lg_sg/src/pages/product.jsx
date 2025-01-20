// import React, { useState } from 'react'

import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ERROR, SUCCESS } from "../redux/productRedux/actionType";

// function Product() {

//   const [product,setProduct] = useState({
//     img : "",
//     name : "",
//     price : "",
//     des : ""
//   })

//   const hlChange =(e)=>{ 
//     const {name, value } = e.target
//     setProduct({...product,[name] : value})
//     console.log(product);
//   }
 
//   const hlSubmit=(e)=>{
//     e.preventDefault()
//     axios.post(`http://localhost:3000/product`.product)
//     .then((Res)=>console.log(Res))
//     .catch((Err)=>console.log(Err))
//     }
  

//   return (
//     <div>
//       <form action="" onSubmit={hlSubmit}>
//         <h1>Product</h1>
//         <input type="text" name='img' placeholder='Enter product ImgURL'  onChange={hlChange} />  <br /><br />
//         <input type="text" name='name' placeholder='Enter product name'  onChange={hlChange} /> <br /><br />
//         <input type="text" name='price' placeholder='Enter product price'  onChange={hlChange} /> <br /><br />
//         <input type="text" name='des' placeholder='Enter product description' onChange={hlChange}  /> <br /><br />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default Product

const Ddata = useSelector((st)=>st.Productreducer)

const dispatch = useDispatch()

useEffect(()=>{
  axios.get(`http://localhost:3000/product`)
  .then((Res)=>{
    console.log(Res);
      dispatch({type : SUCCESS, payload : Res.data })
      console.log(Ddata);
  })
  .catch((Err)=>{
    console.log(Err);
    dispatch({type : ERROR})
  })
}) 