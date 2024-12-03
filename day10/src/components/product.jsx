import Productlist from "./productlist"
import { useState,useEffect } from "react"

function Product(){
    const [arr,setArr] = useState([])
  
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

    return (<Productlist  data={arr} />)
}

export default Product