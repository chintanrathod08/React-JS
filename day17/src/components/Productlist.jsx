import React from 'react'

function Productlist({passdata,hlDelete,hlEdit}) {
    // console.log(passdata);
    
  return (<>
    <div>
        {passdata.map((el)=>{
            return( <div key={el.id} > <br />
                <img src={el.imgURL} alt="" width={"250px"} height={"300px"} />
                <h2>{el.name}</h2>
                <p>{el.price}</p>
                <p>{el.des}</p>
                <button onClick={()=>hlDelete(el.id)}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>hlEdit(el.id)}>Edit</button>
            </div>)
        })}
    </div>
  </>);
}

export default Productlist