import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

  const [login,setLogin] = useState({
      logemail : "",
      logpass : ""  
  })  

  const redirect = useNavigate()

  const hlChange =(e)=>{
    const {name, value} = e.target
    setLogin({...login,[name] : value})
    console.log(login);
  }

  const hlSubmit=(s)=>{
    s.preventDefault()

    axios.get(`http://localhost:3000/user?email=${login.logemail}`)
    .then((Res)=>{
      console.log(Res.data.length);
        if(Res.data[0].password == login.logpass ){
            alert("Login Successfull...")
            redirect("/")
          }else{
            alert("Wrong Password")
          }
      
    })
    .catch((Err)=>{
      console.log(Err);
    })
  }

  return (
    <div>
      <form action="" onSubmit={hlSubmit}>
        <h1>Login</h1>
        <input type="text" placeholder='Enter re-enter email' name='logemail' onChange={hlChange} /> <br /><br />
        <input type="text" placeholder='Enter re-enter password' name='logpass' onChange={hlChange} /> <br /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login