import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loginlist from './loginlist'


function Login() {

    const [form,setForm] = useState({
        email : "",
        password : ""
    })

    const navigate = useNavigate()

    const handleChange=(e)=>{
        const {name,value} = e.target
        setForm ({...form,[name] : value})
    }

    const handleSubmit=(j)=>{
        j.preventDefault()

        fetch(`http://localhost:3000/username?email=${form.email}`)
        .then((Res)=>{
            return Res.json()
        })
        .then((res)=>{
            console.log(res);
           if(res.length > 0){
            if(res[0].password == form.password){
                alert("Login successfully")
                localStorage.setItem("isLogin",true)
                navigate("/")
            }else{
                alert("Worng password")
            }
           }else{
            alert("User not register")
           }
        })
        .catch((err)=>{
            console.log(err);
            
        })
        setForm({
            email : "",
            password : ""
        })

        
    }

  return (
    <div>
        <center> <br />
            <h1>Login</h1> <br />
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='email' placeholder='email' onChange={handleChange}/><br /><br />
                <input type="text" name='password' placeholder='password' onChange={handleChange}/><br /><br />
                <input type="submit" />
            </form>
        </center>

         <Loginlist/>
    </div>
  )
}

export default Login