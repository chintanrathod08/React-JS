import React from 'react'
import { useState } from 'react'

function Product() {

    const [product,setProduct] = useState({
        proname : "",
        proprice : "",
        prodes : "",
        proimg : ""
    })

    var [btnsub,setbtnsub] = useState(true)
    var [pnErr, setpnErr] = useState(false)
    var [ppErr,setppErr]=useState(false)
    var [pdErr, setpdErr] = useState(false)

    const Prochange = (p)=>{
        const {name,value} = p.target
        setProduct({...product, [name] : value })
        console.log(product);

        if(p.target.value > 0){
            setbtnsub(false)
        }
    }

    function hlBlure(b){
        var {name, value} = b.target
        if (name == "proname" && value.length <= 3) {
            setpnErr(true)
        }
        
        if (name == "proprice" && value < 1 ) {
            setppErr(true)
        }

        if (name == "prodes" && value.length >=200 ) {
            setpdErr(true)
        }
    }



    function hlFocus(f){
        var {name,value} = f.target
        if(name == "proname"){
            setpnErr(false)
        }
        if(name == "proprice"){
            setppErr(false)
        }
        if(name == "prodes"){
           setpdErr(false)
        }
    }

    function submitData(e) {
        e.preventDefault()

        if( pnErr == false && ppErr == false && pdErr == false){
            setProduct(product)
            alert("Product Data Submit Successfully")
        }
        else{
            alert("Please Fill Product Data ")
        }
    }


  return ( <> <div className='main'>
      <form action="" onSubmit={submitData}>
      
      <h1>Product Form</h1> <br /> 
     
      <input type="text" name='proname'  placeholder='Enter Product Name' onChange={Prochange} onBlur={hlBlure} onFocus={hlFocus} style={pnErr == true ? { borderColor: "rgba(244, 74, 40, 0.942)" }: { borderColor: "black" }}  /> <br />
      { pnErr == true ? <p>Must be at least 3 characters long.</p> : ""}
       <br />
      
      <input type="number" name='proprice' placeholder='Enter Product Price' onChange={Prochange} onBlur={hlBlure} onFocus={hlFocus} style={ppErr == true ? { borderColor: "rgba(244, 74, 40, 0.942)" }: { borderColor: "black" }}  /> <br />
      { ppErr == true ? <p>Must be a positive number.</p> : ""}

      <br />
      
      <select name="" id="" onChange={Prochange}>
        <option value="Category">Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Groceries">Groceries</option>
        <option value="Books">Books</option>
        </select><br /><br />
     
      <input type="text" name='prodes' placeholder='Product Description' onChange={Prochange} onBlur={hlBlure} onFocus={hlFocus} style={pdErr == true ? { borderColor: "rgba(244, 74, 40, 0.942)" }: { borderColor: "black" }}  /> <br />
      { pdErr == true ? <p>Maximum of 200 characters.</p> : ""}
      
        <br />
     
      <input type="file" id='imgfile' name='proimg' placeholder='Product Image'  onChange={Prochange} onBlur={hlBlure} onFocus={hlFocus} /><br /><br />

      <input type="submit" disabled={btnsub} className='sub' />
      </form>
    </div>
    
    </>);
}

export default Product
