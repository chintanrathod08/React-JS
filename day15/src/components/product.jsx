import { useState,useEffect } from "react"
import Productview from "./productview"

function Product(){
    const [arr,setArr] = useState([])
    const [state,setState] = useState(true)
  
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>{
      return res.json()
    })
    .then((Res)=>{
      setArr(Res)
      console.log(arr);
    })
    .catch((Err)=>{
        console.log(Err);
    })
  },[])

    return (
      <Productview data={arr} send={state} />
    )
}

export default Product