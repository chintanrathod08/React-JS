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
    const [sort,setSort] = useState(false)
    const [arr2,setArr2] = useState([])

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


    const deleteData = (deleteId)=>{
        const a = arr.filter((el)=>{
            if(el.id != deleteId ){
                return el
            }
        })
        setArr(a)
        
    }

   
    const editData = (editID)=>{
        setEdit(editID)
        arr.forEach((el)=>{
            if(el.id == editID ){
                setProduct({...Product,...el})
            }
        })
    }

    const hlShort =(el)=>{
        const {value} = el.target
        setArr([...arr])
        setSort(true)   
            
        if(value == "highprice"){
            const hp = arr.sort((a,b)=>{
                return b.price - a.price
            })
            setArr2(hp)
        }
        if(value == "lowprice"){
            const lp = arr.sort((a,b)=>{
                return a.price - b.price
            })
            setArr2(lp)
        }
    }
    
    return (<>
    <div>   
      <center> <br /><br /><br /><br /><br />
         <form action="" className='text-center w-[350px]  h-[auto] p-[2%] rounded-[10px] border' onSubmit={dataSubmit} >

            <h1 className='text-[25px]'>Product Form</h1> <br />

            <input type="text"  className='border border-[dimgray] h-[35px] w-[100%] ps-4 rounded-[10px]' name='imgURL' value={product.imgURL}  placeholder='Enter Product ImageURL' onChange={hlChange}  /><br /><br />

            <input type="text" className='border border-[dimgray] h-[35px] w-[100%] ps-4 rounded-[10px]' name='name'   value={product.name}  placeholder='Enter Product Name' onChange={hlChange} /><br /><br />

            <input type="number" className='border border-[dimgray] h-[35px] w-[100%] ps-4 rounded-[10px]' name='price'  value={product.price}  placeholder='Enter Product Price' onChange={hlChange} /> <br /><br />
            
            <input type="text" className='border border-[dimgray] h-[35px] w-[100%] ps-4 rounded-[10px]' name='des'    value={product.des}  placeholder='Enter Product Discription' onChange={hlChange} /><br /><br />

            <select name="" id="" className='w-[60%] h-[35px] ps-5 rounded-[10px] border border-[black]' onChange={hlShort}>
                <option value="">Select Price</option>
                <option value="highprice">High to Low</option>
                <option value="lowprice">Low to High</option>
            </select> <br /> <br />

            <input type="submit" className='cursor-pointer text-[18px] border w-[60%] h-[35px] text-[white] bg-[orangered] rounded-[10px]' value={ edit == "" ? "submit" : "Edit" } /> 
            
        </form>
        </center>
    </div>
    
     <Productlist alldata={arr} hlDelete={deleteData} hlEdit={editData} alldata2={arr2} sort={sort} />
    
    </>)
}

export default Product
