import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/fire'

function Product() {

   const [product,setProduct] = useState({
    proname : "",
    protitle : "",
    proprice : ""
   })   


   const [state,setState] = useState([])
   const [edit,setEdit] = useState(null)

   useEffect(()=>{
    getData()
   },[])

   const hlChange =(e)=>{
    const {name,value} = e.target
    setProduct({...product,[name] : value})
    console.log(product);
    }


     const hlSubmit= async (d)=>{
        d.preventDefault()
        if(edit == null){
            await  addDoc(UseCollection,product)
            alert("Product Data Added Successfully....")
        }else{
            const alldata = doc(db,"prodata",edit)
            await updateDoc(alldata,product)
        }
        
        setProduct({
            proname : "",
            protitle : "",
            proprice : ""
        })
        
       setEdit(null)
      
        getData()
        
    }   

    const UseCollection = collection(db,"prodata")
    
    const getData = async ()=>{
        const prodata = await getDocs(UseCollection)
        const ans = prodata.docs.map((el)=>{
            return {id : el.id, ...el.data()}
        })
        setState(ans)
    }   
     console.log(product)


    const hlDelete = async (iddl)=>{
        const dlData = doc(db,"prodata",iddl)
        await deleteDoc(dlData)
        setProduct({
            proname : "",
            protitle : "",
            proprice : ""
        })
        getData()
    }

    const hlEdit =(idet)=>{
        setEdit(idet)
        state.forEach((el)=>{
            if(el.id == idet){
                setProduct(el)
            }
        })
    }

  return (
    <div>
      <h1>Product Form</h1> <br />
      <form action="" onSubmit={hlSubmit}>
      <input type="text" className='w-[250px] h-[30px] rounded-[7px] border ps-3' placeholder='Enter Product Name' name='proname' value={product.proname} onChange={hlChange}  /> <br /><br />
      <input type="text" className='w-[250px] h-[30px] rounded-[7px] border ps-3' placeholder='Enter Product Title' name='protitle' value={product.protitle} onChange={hlChange}  /> <br /><br />
      <input type="number" className='w-[250px] h-[30px] rounded-[7px] border ps-3' placeholder='Enter Product Price' name='proprice' value={product.proprice} onChange={hlChange}  /> <br /><br />
      <input type="submit" className='w-[150px] h-[30px] rounded-[7px] border' />
      </form>   <br />
    
    <div className='w-[100%] h-[auto] grid grid-cols-3 gap-3'>
      { state.map((el)=>{
            return <div key={el.id}>
                <img src={el.proname} alt="" />
                <h1>{el.protitle}</h1> <br />
                <p>{el.proprice}</p> <br />
                <button onClick={()=>hlEdit(el.id)}>Edit</button> &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>hlDelete(el.id)}>Delete</button>
            </div>
        }) }</div>
    
    </div>
  )
}

export default Product