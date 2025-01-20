import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const [sign,setSign] = useState({
        user : "",
        email : "",
        password : ""
    })

    const navigate = useNavigate()

    const hlChange =(e)=>{
     const {name,value} = e.target 
     setSign({...sign,[name] : value})
     console.log(sign);
    } 

    const hlSubmit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3000/username",sign)
        .then((Res)=>{
          console.log(Res.data);
          alert("User SignUp Successfully...")
          navigate("/login")
        })
        .catch((Err)=>console.log(Err))
    }


  return (
    <div>
      <h1>SignUp</h1>
      <form action="" onSubmit={hlSubmit}>
        <input type="text" placeholder='Enter name' name='user' onChange={hlChange} /> <br /><br />
        <input type="text" placeholder='Enter email' name='email' onChange={hlChange} /> <br /><br />
        <input type="text" placeholder='Enter password' name='password' onChange={hlChange} /> <br /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default SignUp
