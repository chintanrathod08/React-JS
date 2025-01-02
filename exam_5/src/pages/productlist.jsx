import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Productlist() {

  const [productlist,setProductlist] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/products`)
    .then((res)=> res.json())
    .then((Res)=>{
      setProductlist(Res)
    })
    .catch((Err)=>{
      console.log(Err);
    })
  },[productlist])

  const Delete =(IDdelete)=>{
    fetch(`http://localhost:3000/products/${IDdelete}`,{
      method : "DELETE",
    })
    .then((res)=>{
      console.log(res);
    })
  }

  return (
    <div>
        {productlist.map((el)=>{
          return <div key={el.id} >
             <img src={el.img} alt="" />
             <h1>{el.title}</h1>
             <p>{el.price}</p>
             <p>{el.dis}</p>
             <button onClick={()=>{Delete(el.id)}}>Delete</button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={`/editeform/${el.id}`} >
             <button>Edite</button>
             </Link>
          </div>
        }) }
    </div>
  )
}

export default Productlist
