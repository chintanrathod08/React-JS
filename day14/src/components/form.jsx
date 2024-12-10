import React, { useState } from 'react'
import Formdata from './formdata'

function Form() {
 
    const [obj,setObj] = useState({
        user : "",
        course : "",
        language : [""],
        hobbies : [""]
    })
    
    var [arr,setArr] = useState([])

    const handleChange = (e)=>{
        const {name,value,dataset} = e.target

        if(name == "language"){
            var arr1 = [...obj.language]
            arr1[dataset.index] = value
            setObj({...obj, language : arr1})
        }
        else if(name == "hobbies"){
            var arr2 = [...obj.hobbies]
            arr2[dataset.index] = value
            setObj({...obj, hobbies : arr2})
            
        }
        else{
            setObj({...obj, [name] : value })
        }
    }

    const addMore1 = ()=>{
        setObj({...obj,language : [...obj.language , ""]})
        
    } 

    const addMore2 = ()=>{

        setObj({...obj,hobbies : [...obj.hobbies , ""]})
    } 

    const subData = (e)=>{
        e.preventDefault()
        setArr([...arr,obj])
        console.log(arr);
    }
    


  return (
    <>
        <div>
      <form action="" onSubmit={subData} >
        
        <input type="text" name='user' placeholder='Enter Your Name' onChange={handleChange} /> <br /> <br />
        <input type="text" name='course' placeholder='Enter Your Course' onChange={handleChange} /><br /><br />
       
        {
            obj.language.map((el,index)=>{
                return <>
                <input type="text" name='language' placeholder='Language' onChange={handleChange} data-index={index} />        
                </>
            })
        }
         &nbsp;&nbsp; <input type="button" value="Add" onClick={addMore1} />
        
        <br /> <br />

        {
            obj.hobbies.map((el,index)=>{
                return <>
            <input type="text" name='hobbies' placeholder='Hobbies' onChange={handleChange} data-index={index}  />                
                </>
            })
        }

        &nbsp;&nbsp; <input type="button" value="Add" onClick={addMore2} /><br /> <br />
        <input type="submit" />        

    </form>  
    </div>
     <Formdata cr={arr}/>
    </>
  )
}

export default Form
