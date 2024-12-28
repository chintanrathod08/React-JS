import React, { useEffect, useState } from 'react'

function Cart() {

  const [cart,setCart] = useState(JSON.parse(localStorage.getItem("cart") || [] ))

  useEffect(()=>{
     localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])

  const hlAddqut=(idd,qut)=>{
    console.log(idd,qut);
    let data = cart.map((el)=>{
      if(el.id == idd){
        return {...el, quantity : el.quantity + 1 }
      }else{
        return el;
      }
    })
    setCart(data)
  }
  

  return (
    <div>
        {
          cart.length == 0 ? <h1>Login............</h1> 
          : <div>
            { cart.map((el)=>{
              return <>
              
              <div>
                    <img src={el.image} alt="" />
                    <h1>{el.name}</h1>
                    
                    <button>-</button>
                    <h1>{el.quantity}</h1>
                    <button onClick={()=>hlAddqut(el.id,el.quantity)} >+</button>
                    </div>
              </>
            }) }
          </div>
        }
    </div>
  )
}

export default Cart
