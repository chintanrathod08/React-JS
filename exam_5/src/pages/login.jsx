import React, { useEffect, useState } from 'react'
import Signup from './signup'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {

  const [login,setLogin] = useState({
    email : "",
    password : ""
  })

  const Navigate = useNavigate()

  const hlChange = (e)=>{
    const {name,value} = e.target
    setLogin({...login, [name] : value })
  } 

  const hlSubmit = (e)=>{
    e.preventDefault()

    fetch(`http://localhost:3000/users?email=${login.email}`)
    .then((Res)=>{
      return Res.json()
    })
    .then((res)=>{
      console.log(res);
      if(res.length > 0){
        if(res[0].password == login.password){
          alert("Login Successfully")
          localStorage.setItem("isLogin",true)
          Navigate("/product")
        }else{
          alert("Password is worng")
        }
      }else{
        alert("User not Registered")
      }
    })
    .catch((Err)=>{
      console.log(Err);
    })
  }
  
  
  return (
    <div> 
     <center> <form action="" onSubmit={hlSubmit}>
        <h1>Login</h1> <br />
        <input type="text"  name='email' placeholder='Re Enter email' onChange={hlChange} /> <br /><br />
        <input type="text" name='password' placeholder='Re Enter password' onChange={hlChange} /> <br /><br />  
        <input type="submit" />
      </form> </center>
    </div>
  )
}

export default Login
