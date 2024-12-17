import React, { useState,useEffect } from 'react'
import Productlist from './Productlist'

function Product() {

    const [product,setProduct] = useState({
        imgURL : "",
        name : "",
        price : "",
        des : ""
    })


    const [arr,setArr] = useState(JSON.parse(localStorage.getItem("alldata")) || [] )


    useEffect(()=>{
        localStorage.setItem("alldata",JSON.stringify(arr))
    },[arr])

    const hlChange = (e)=>{
        const {name, value} = e.target
        setProduct({...product, [name] : value })
    }


    const dataSubmit = (e)=>{
        e.preventDefault
        setArr([...arr,product])
       
        setProduct({
            imgURL : "",
            name : "",
            price : "",
            des : ""
        })
    }

  return (<>
    <div>   
      <center>  <form action="" onSubmit={dataSubmit} >
            <input type="text" name='imgURL' value={product.imgURL}  placeholder='Enter Product ImageURL' onChange={hlChange}  /><br /><br />

            <input type="text" name='name'   value={product.name}  placeholder='Enter Product Name' onChange={hlChange} /><br /><br />

            <input type="text" name='price'  value={product.price}  placeholder='Enter Product Price' onChange={hlChange} /> <br /><br />
            
            <input type="text" name='des'    value={product.des}  placeholder='Enter Product Discription' onChange={hlChange} /><br /><br />

            <input type="submit" />
        </form>
        </center>
    </div>
    <Productlist  passdata={arr} />
    </>)
}

export default Product
