import React, { useState,useEffect } from 'react'
import { v4 } from 'uuid';
import Productlist from './Productlist';

function Product() {

    const [product,setProduct] = useState({
        id : v4(),
        imgURL : "",
        name : "",
        price : "",
        des : ""
    })


    const [arr,setArr] = useState(JSON.parse(localStorage.getItem("alldata")) || [] )
    const [edit,setEdit] = useState("")

    useEffect(()=>{
        localStorage.setItem("alldata",JSON.stringify(arr))
    },[arr])

    const hlChange = (e)=>{
        const {name, value} = e.target
        setProduct({...product, [name] : value })
    }


    const dataSubmit = (e)=>{
      e.preventDefault()
           if( edit == "" ){
            setArr([...arr,{...product,id : v4() }])
            setProduct({
                imgURL : "",
                name : "",
                price : "",
                des : ""
            })
            console.log(arr);
           } 
           else{
            const c = arr.map((el)=>{
                if(el.id == edit ){
                    return {...el,...product}
                }else{
                    return el;
                }
            })
            setArr(c)
            setEdit("")
            setProduct({
                imgURL : "",
                name : "",
                price : "",
                des : ""
            })
           }  
    }


    const hld =(deleteId)=>{
        const a = arr.filter((el)=>{
            if(el.id != deleteId ){
                return el
            }
        })
        setArr(a)
    }

   
    const hle =(editID)=>{
        setEdit(editID)
        arr.forEach((el)=>{
            if(el.id == editID ){
                setProduct({...Product,...el})
            }
        })
    }
    
    // const Editdata = ()=>{
    //     const c = arr.map((el)=>{
    //         if(el.id == edit ){
    //             return {...el,...product}
    //         }else{
    //             return el;
    //         }
    //     })
    //     setArr(c)
    //     setEdit("")
    //     setProduct({
    //         imgURL : "",
    //         name : "",
    //         price : "",
    //         des : ""
    //     })
    // }
    

    return (<>
    <div>   
      <center> <br /><br /><br /><br /><br />
         <form action="" onSubmit={dataSubmit} >
            <input type="text" name='imgURL' value={product.imgURL}  placeholder='Enter Product ImageURL' onChange={hlChange}  /><br /><br />

            <input type="text" name='name'   value={product.name}  placeholder='Enter Product Name' onChange={hlChange} /><br /><br />

            <input type="number" name='price'  value={product.price}  placeholder='Enter Product Price' onChange={hlChange} /> <br /><br />
            
            <input type="text" name='des'    value={product.des}  placeholder='Enter Product Discription' onChange={hlChange} /><br /><br />

            <input type="submit" value={edit == "" ? "submit" : "Edit" } /> 
            {/* <input type="button" value="Edit" /> */}
        </form>
        </center>
    </div>
    
     <Productlist passdata={arr} hlDelete={hld} hlEdit={hle} />
    
    </>)
}

export default Product
