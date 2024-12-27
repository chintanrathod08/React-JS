import React, { useState } from 'react'
import Productlist from '../components/Productlist'

function Product() {

  const [product,setProduct] = useState({
    proimg : "",
    title : "",
    price : "",
    des : ""
  })

  const [arr,setArr] = useState([])
  

 const hlChange = (p)=>{
    const {name, value} = p.target
    setProduct({...product, [name] : value })
    console.log(product);
  }

  const hlSubmit =(d)=>{
    d.preventDefault()

    
    fetch(`http://localhost:3000/product`,{
        method : "POST",
        headers : { "Content-Type" : "application/JSON" },
        body : JSON.stringify(product)
    })
    .then((Res)=>{
      return Res.json() 
    })
    .then((res)=>{
      console.log(res);
    })
    .catch((Err)=>{
      console.log(Err);
    })

    setProduct({
      proimg : "",
      title : "",
      price : "",
      des : ""
    })

    setArr([...arr,product])

    if(product.length != 0){
      alert("Please enter product data")

    }
    else{
      alert("Product data added successfull")
      

    }

  }



  return (
    <div>
     <center> <form action="" onSubmit={hlSubmit} ><br />
        <h1>Product Form</h1><br />
        <input type="text" name='proimg' value={product.img} onChange={hlChange} placeholder='Enter Product ImgURL'   /> <br /><br />
        <input type="text" name='title' value={product.title} onChange={hlChange}  placeholder='Enter Product Name'  /><br /><br />
        <input type="text" name='price' value={product.price} onChange={hlChange}  placeholder='Enter Product Price'  /><br /><br />
        <input type="text" name='des' value={product.des} onChange={hlChange}  placeholder='Enter Product Description'  /><br /><br />
        <input type="submit" id="sub"  />
      </form> </center>
      <Productlist prodata={arr} />
    </div>
  )
}

export default Product
