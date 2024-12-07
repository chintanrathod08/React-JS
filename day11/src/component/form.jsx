import { useState } from 'react'
import Formsubmit from './formsubmit'

function Form() {
    
       const [state,setState] = useState({
         title : "",
         img : "",
         price : 0
       })
       
       const [arr,setarr] = useState([])
       
       const handleChange = (e)=>{
           const {name,value} = e.target
          setState({...state,[name] : value})
       }

       const handleSubmit = (e)=>{
         e.preventDefault()
        setarr([...arr,state])
       }
       console.log(arr)
       
  return (
    <>
    <center><br /><br /><br />
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='Enter Title' onChange={handleChange} required/><br /><br />
            <input type="text" name='img' placeholder='Enter Image' onChange={handleChange} required /><br /><br />
            <input type="text" name='price' placeholder='Enter Price' onChange={handleChange} required/><br /><br />
            <input type="submit"  />
        </form>
        </center>
        <Formsubmit arr={arr}/>
    </>
  )
}

export default Form