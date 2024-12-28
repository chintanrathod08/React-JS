import React, { useState } from 'react'
import Productlist from './Productlist'

function Product() {
  
  const [product,setProduct] = useState({
    proimg : "",
    title : "",
    price : "",
    dis : ""
  })

  const hlChange=(e)=>{
    const {name, value} = e.target
    setProduct({...product, [name] : value })
    console.log(product);
  }

  const hlSubmit=(e)=>{
    e.preventDefault()

    fetch(`http://localhost:3000/product`,{
      method : "POST",
      headers : {"Content-Type" : "application/JSON" },
      body : JSON.stringify(product)
    })

    alert("This Product adedd...")

    setProduct({
    proimg : "",
    title : "",
    price : "",
    dis : ""
    })

  }


  return (
    <div><center>
      <form action="" onSubmit={hlSubmit} >
      <h1>Product Form</h1> <br />
      <input type="text" name='proimg' value={product.proimg}  placeholder='Product ImgUrl ' onChange={hlChange}  /><br /><br />
      <input type="text" name='title' value={product.title}  placeholder='Product name' onChange={hlChange}  /><br /><br />
      <input type="text" name='price' value={product.price}  placeholder='Product price' onChange={hlChange}  /><br /><br />
      <input type="text" name='dis' value={product.dis}  placeholder='Product discreaption' onChange={hlChange}  /><br /><br />
      <input type="submit" />
      </form>
    </center>
    <Productlist/>
    </div>
  )
}

export default Product
