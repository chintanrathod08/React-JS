import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Editeform() {

    const {edid} = useParams()
  
    console.log(edid);
    
    const navigate = useNavigate()

    const [edite,setEdite] = useState({
        img : "",
        title : "",
        price : "",
        dis : ""
    })

    const hlEdite = (e)=>{
        const {name , value} = e.target
        setEdite({...edite, [name] : value })
    }

    useEffect(()=>{
        fetch(`http://localhost:3000/products/${edid}`)
        .then((res)=> res.json())
        .then((Res)=>{
            setEdite(Res)
        })
        .catch((Err)=>{
            console.log(Err);
        })
    },[])

    const hlEditesub =(e)=>{
        e.preventDefault()

        fetch(`http://localhost:3000/products/${edid}`,{
            method : "PUT",
            headers : {"Content-Type" : "application/json"},    
            body : JSON.stringify(edite)
        })
        alert("Product Data Edited Successfully....")
        navigate("/productlist")
    }   

  return (
    <div>
      <center>
       <form action="" onSubmit={hlEditesub} >
      <h1>Edite Product Form</h1> <br />
        <input type="text" name='img' value={edite.img} placeholder='Enter Product ImgURL' onChange={hlEdite} /> <br /><br />
        <input type="text" name='title' value={edite.title} placeholder='Enter Product Name' onChange={hlEdite} /><br /><br />
        <input type="number" name='price' value={edite.price} placeholder='Enter Product Price' onChange={hlEdite} /><br /><br />
        <input type="text" name='dis' value={edite.dis} placeholder='Enter Product Discripation' onChange={hlEdite} /><br /><br />
        <input type="submit" />
      </form> </center>
      
    </div>
  )
}

export default Editeform
