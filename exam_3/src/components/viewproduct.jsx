import React from 'react'

function Viewproduct(props) {
  return ( props.allData.map((el)=>{
    return <> <img src={el.proimg} alt="" />
      <h1>Product Name  : {el.proname}</h1>
      <h1>Product Price : {el.proprice} </h1>
      <h2>Product Discription : {el.prodes}</h2>
    </>
  })
   
  );
}

export default Viewproduct
