import React from 'react'
import { useState, useEffect } from 'react'

function Product() {

  const [product,setProduct] = useState([])
  const [sort,setSort] = useState("") 
  const [sortdata,setSortdata] = useState([])
  const [filterval,setFilterval] = useState("")
  const [search,setSearch] = useState("")

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=> res.json())
    .then((Res)=>{
        console.log(Res);
        setProduct(Res)
        setSortdata(Res)
    })
    .catch((Err)=>{
        console.log(Err);
    })
  },[])

  useEffect(()=>{
    let arr = [...product]
    if(sort == 'high'){
        arr = arr.sort((a,b)=> b.price - a.price )
    }else if(sort == 'low'){
        arr = arr.sort((a,b)=> a.price - b.price )
    }
    else{
        arr = product
    }

    if(filterval != ""){
        arr = arr.filter((e)=>{
            return e.category == filterval
        })
    }

    if(search != "" ){
        arr = arr.filter((e)=>{
            return e.title.toLowerCase().includes(search.toLowerCase())
        })
    }

    setSortdata(arr)

},[sort,filterval,search])
  
  return (
        <>
        <div className='w-[100%] h-[80px]  pt-[25px] shadow-md shadow-[gray]'>
        <center>

        <input type="text" placeholder='Search product....' className='ps-3 w-[350px] h-[35px] rounded-[8px] border shadow-lg'  onChange={(e)=>{setSearch(e.target.value)}} />

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  

       <select className='border rounded-[8px] h-[32px] w-[180px] ps-[30px]' onChange={(e)=>{setSort(e.target.value)}} >
            <option value="">Sorting by Price</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
        </select>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  

        <select className='border w-[180px] ps-[30px] rounded-[8px] h-[32px]' onChange={(e)=>{setFilterval(e.target.value)}} >
            <option value="">Select Category</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
        </select>
        </center>
        </div>
            <br />

        
            <div className='w-[100%] h-[auto] grid grid-cols-4 gap-5 items-center p-[25px]'>
                
        
        { sortdata.map((el)=>{
            return <div key={el.id}  className='border h-[360px] rounded-[10px] shadow-lg cursor-pointer'>
            
           <div className='h-[200px] w-[100%] flex justify-center items-center pt-3'>
            <img src={el.image} alt="" width='110px' />
            </div>
              <div className='h-[180px] w-[100%] p-4 pt-3'><h2>{el.title}</h2>
                <h3 className='text-[red] pt-3'>₹ {el.price}</h3>
                <p className='text-[dimgray]'>{el.category}</p>
                </div>
            </div>
        }) }
    </div>
    </>  )
}

export default Product