import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Singleproduct() {
 
    const [obj,setObj] = useState({})
   
    const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    const {id} = useParams()

      useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
      },[cart])

       useEffect(()=>{
         fetch(`https://api.escuelajs.co/api/v1/categories/${id}`)
        .then((Res)=>{
           return Res.json()
        })
        .then((res)=>{
            console.log(res);
            setObj(res)
        })
        .catch((Err)=>{
          console.log(Err);
        })
      },[]) 


      const hlAddcart=(cartid)=>{
        setCart([...cart,obj])

        const cartdata = cart.map((el)=>{

          if(el.id == cartid ){
            alert("This Item already present")
          }
          else{
            return setObj(cartdata) 
          }

        })
       
      }


   return (
    <div>
       <img src={obj.image} alt="" />
       <h1>{obj.name}</h1>
       <button onClick={hlAddcart} className='border w-[120px] h-[35px] rounded-[10px] mt-2'>Add To Cart</button>
    </div>
  ) 
}

export default Singleproduct


