import React, { useState } from 'react'
import Productlist from './Productlist'

function Productform() {
    var [Data, setData] = useState({
        Title: "",
        Price: '',
        Img: "" 
    })
    function handdel(h) {
        var {value,name} = h.target
        setData({ ...Data, [name]: value })

    }
    function send(hi) {
        hi.preventDefault()

        fetch(`http://localhost:3000/product`,{
            method : "POST",
            headers : {
                "content-type" : "application"
            },
            body : JSON.stringify(Data)
        })

        alert("Product adeddd.....")

        setData({
            Title: "",
            Price: '',
            Img: "" 
        })

    }

   


    return (
      <>
      <div className='bapo'>
          <div className="bachu">
              <h1>Enter Product Data</h1>
              <form action="" onSubmit={send}>
                  <input value={Data.Title} className='input' type="text" required name='Title' placeholder='Enter Product Title' onChange={handdel}/> <br />
                  <input value={Data.Price} className='input' type="text" required name='Price' placeholder='Enter Product Price' onChange={handdel } /> <br />
                  <input value={Data.Img} className='input' type="text" required name='Img' placeholder='Enter Product Imgage URL' onChange={handdel } /> <br />
                  <input className='input' type="submit" value="Add Product"  />
              </form>
            </div>
            </div>
            <Productlist/>
        </>
  )
}

export default Productform