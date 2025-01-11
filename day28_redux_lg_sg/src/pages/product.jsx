import React, { useState } from 'react'

function Product() {

  const [product,setProduct] = useState({
    img : "",
    name : "",
    price : "",
    des : ""
  })

  const hlChange =(e)=>{ 
    const {name, value } = e.target
    setProduct({...product,[name] : value})
    console.log(product);
  }
 
  const hlSubmit=(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:3000/product`.product)
    .then((Res)=>console.log(Res))
    .catch((Err)=>console.log(Err))
    }
  

  return (
    <div>
      <form action="" onSubmit={hlSubmit}>
        <h1>Product</h1>
        <input type="text" name='img' placeholder='Enter product ImgURL'  onChange={hlChange} />  <br /><br />
        <input type="text" name='name' placeholder='Enter product name'  onChange={hlChange} /> <br /><br />
        <input type="text" name='price' placeholder='Enter product price'  onChange={hlChange} /> <br /><br />
        <input type="text" name='des' placeholder='Enter product description' onChange={hlChange}  /> <br /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Product
