import React, { useEffect, useState } from 'react'

function Productlist() {

  const [productlist,setProductlist] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/product`)
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      setProductlist(res)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[productlist])

  const handleDelete =(IDdelete)=>{
    fetch(`http://localhost:3000/product/${IDdelete}`,{
      method : "DELETE",
    })
    .then((Res)=>{
     console.log(Res);
    })
  }


  return (
    <div>
        {productlist.map((el)=>{
            return <> <div key={el.id}>
             <img src={el.proimg} alt="" />
            <h1>{el.proname}</h1>
            <h3>{el.proprice}</h3>
            <p>{el.prodis}</p>
            <button onClick={()=>{handleDelete(el.id)}} >Delete</button>
            </div>
            </>})
        }
    </div>
  )
}

export default Productlist