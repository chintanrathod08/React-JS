import React, { useState } from 'react'
import Productlist from './productlist'

function Product() {

  const [product,setProduct] = useState({
    proimg : "",
    proname : "",
    proprice : "",
    prodis : ""
  })

  const handleChange=(e)=>{
    const {name,value} = e.target
    setProduct({...product,[name] : value})
  }

  const handleSubmit=(j)=>{
    j.preventDefault()

    fetch(`http://localhost:3000/product`,{
      method : "POST",
      headers : {"content-type" : "application/JSON"},
      body : JSON.stringify(product)


    })

    setProduct({
      proimg : "",
    proname : "",
    proprice : "",
    prodis : ""
    })
  }

  return (
    <div>
      <center> <br />
        <h1>Product</h1> <br />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='proimg' value={product.proimg} placeholder='productimage' onChange={handleChange}/> <br /><br />
        <input type="text" name='proname' value={product.proname} placeholder='productname' onChange={handleChange}/> <br /><br />
        <input type="text" name='proprice' value={product.proprice} placeholder='productprice' onChange={handleChange}/> <br /><br />
        <input type="text" name='prodis' value={product.prodis} placeholder='productdiscription' onChange={handleChange}/> <br /><br />
        <input type="submit" />
      </form>
      </center> <br />
   <center><Productlist /></center>   
    </div>
  )
}

export default Product