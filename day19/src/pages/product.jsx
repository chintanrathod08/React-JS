import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

function Product() {

   const [arr,setArr] = useState([])

  useEffect(()=>{
     fetch(`https://api.escuelajs.co/api/v1/categories`)
    .then((Res)=>{
       return Res.json()
    })
    .then((res)=>{
      setArr(res)
      console.log(res);
    })
    .catch((Err)=>{
      console.log(Err);
    })
  },[])  

  return (
    <div>
          {arr.map((el)=>{
            return  <Link key={el.id} to={`/product/${el.id}`} >
                    
                    <div  >
                    <img src={el.image} alt="" />
                    <h1>{el.name}</h1>
                    </div>
                    
                    </Link>
          })}
    </div>
  )
}

export default Product
