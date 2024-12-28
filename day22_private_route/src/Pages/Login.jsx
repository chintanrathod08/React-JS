import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [form,setForm] = useState({
        email : "",
        password : ""
    })

     const hlChange=(c)=>{
        const {name, value} = c.target
        setForm({...form, [name] : value})
        console.log(form);
    }

    const navigate = useNavigate()

    const hlSubmit=(e)=>{
        e.preventDefault()
        
        fetch(`http://localhost:3000/username?email=${form.email}`)
        .then((Res)=>{
            return Res.json()
        })
        .then((res)=>{
        if(res.length > 0){
            if(res[0].password == form.password){
                alert("Login Successfull")
                localStorage.setItem("isLogin",true) 
                navigate("/")
            }else{
                alert("Wrong Password")
            }
        }else{
            alert("User not register")
        }
        })
        .catch((Err)=>{
            console.log(Err);
            
        })

        setForm({
            email : "",
            password : ""
        })

    }

  return (
    <div>
      <center>
          <form action="" onSubmit={hlSubmit} >
            <h1>Login</h1> <br />
                <input type="text" name='email' value={form.email} placeholder='Enter E-mail' onChange={hlChange}  /><br /><br />
                <input type="text" name='password' value={form.password} placeholder='Enter Password' onChange={hlChange}  /><br /><br />
                <input type="submit" />            
          </form>
      </center>
    </div>
  )
}

export default Login
