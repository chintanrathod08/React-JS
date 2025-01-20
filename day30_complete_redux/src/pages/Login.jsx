import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginFetch } from '../redux/LoginReducer/action'

function Login() {

    const [login,setLogin] = useState({
        email : "",
        password : ""
    })

    const data = useSelector((st)=>st)
    console.log(data);
    
    const dispatch = useDispatch()

    const hlChange =(e)=>{
        const {name, value} = e.target
        setLogin({...login,[name] : value})
        console.log(login);
    }

    const hlSubmit=(e)=>{
       e.preventDefault()
       dispatch(LoginFetch)(login.email,login.password)
    }   
return (
<div>
       <h1>Login</h1>
       <form action="" onSubmit={hlSubmit}>
        <input type="text" placeholder='Re-enter email' name='email' onChange={hlChange} /> <br /><br />
        <input type="text" placeholder='Re-enter password' name='password' onChange={hlChange} /> <br /><br />
        <input type="submit" />
       </form>
    </div>
  )
}

export default Login
