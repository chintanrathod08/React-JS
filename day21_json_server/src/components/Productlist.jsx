import React from 'react'

function Productlist({prodata}) {
  return ( prodata.map((el)=>{
    return( <div key={el.id}>
        <img src={el.proimg} alt="" />
        <h1>{el.title}</h1>
        <p>{el.price}</p>
        <p>{el.des}</p>
    </div>)
  })
   
  )
}

export default Productlist
