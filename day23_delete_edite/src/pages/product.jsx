import React, { useState } from 'react'
import Productlist from './productlist'

function Product() {

 const [product,setProduct] = useState({
     img : "",
     title : "",
     price : "",
     dis : ""
 })
    
  const  hlChange =(c)=>{
    const {name, value} = c.target
    setProduct({...product, [name] : value })
  }

  const hlSubmit =(s)=>{
    s.preventDefault()

    fetch(`http://localhost:3000/products`,{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(product)
    })
    
    setProduct({
     img : "",
     title : "",
     price : "",
     dis : ""
    })

  }
  
  console.log(product);
  

  return (
    <div>
   <center>   <form action="" onSubmit={hlSubmit} >
      <h1>Product Form</h1> <br />
        <input type="text" name='img' value={product.img} placeholder='Enter Product ImgURL' onChange={hlChange} /> <br /><br />
        <input type="text" name='title' value={product.title} placeholder='Enter Product Name' onChange={hlChange} /><br /><br />
        <input type="number" name='price' value={product.price} placeholder='Enter Product Price' onChange={hlChange} /><br /><br />
        <input type="text" name='dis' value={product.dis} placeholder='Enter Product Discripation' onChange={hlChange} /><br /><br />
        <input type="submit" />
      </form> </center>
      
    </div>
  )
}

export default Product