import React, { useEffect, useState } from 'react'

function Productlist() {

  const [product,setProduct] = useState([])
  
  useEffect(()=>{
    fetch(`http://localhost:3000/product`)
    .then((Res)=>{
      return Res.json()
    })
    .then((res)=>{
      setProduct(res)
      console.log(res);
    })
    .catch((Err)=>{
      console.log(Err);
    })
  },[product])

  return (
    <div>
       { product.map((el)=>{
        return <>
        <img src={el.proimg} alt="" />
        <h2>{el.title}</h2>
        <p>{el. price}</p>
        <p>{el.dis}</p>
        </>
       }) }
    </div>
  )
}

export default Productlist
