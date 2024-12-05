import { useRef, useState } from 'react'
import Formsubmit from './formdata'

function Form() {
      var var1 = useRef("");
      var var2 = useRef("");
      var var3 = useRef("")
      const [arr,setarr] = useState([])
      
      const handleSubmit = (e)=>{
         e.preventDefault()
          const state = {
            title : var1.current.value ,
            img : var2.current.value,
            price : var3.current.value
          }
         setarr([...arr,state])
       }
      
       console.log(arr)
       
  return (
    <>
    <center><br />
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name='title' placeholder='Enter Title' ref={var1} /><br /><br />
            <input type="text" name='img' placeholder='Enter Image URL'  ref={var2} /><br /><br />
            <input type="text" name='price' placeholder='Enter Price' ref={var3} /><br /><br />
            <input type="submit"  />
        </form>
        </center>
        <Formsubmit alldata={arr}/>
    </>
  )
}

export default Form


