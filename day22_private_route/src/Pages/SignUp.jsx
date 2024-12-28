import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function SignUp() {

    const [form,setForm] = useState({
        username : "",
        email : "",
        password : ""
    })

    const navigate = useNavigate()

    const hlChange=(c)=>{
        const {name, value} = c.target
        setForm({...form, [name] : value})
        console.log(form);
    }


    const hlSubmit=(e)=>{
        e.preventDefault()
        
        fetch(`http://localhost:3000/username`,{
            method : "POST",
            headers : {"Content-Type" : "application/json" },
            body : JSON.stringify(form)
        })
        .then((Res)=>{
            return Res.json()
        })
        .then((res)=>{
            console.log(res);
            navigate('/Login')
        })
        .catch((Err)=>{
            console.log(Err);
            
        })

        setForm({
            username : "",
            email : "",
            password : ""
        })

    }

  return (
    <div>
      <center>
          <form action="" onSubmit={hlSubmit} >
            <h1>SignUp</h1> <br />
                <input type="text" name='username' value={form.username} placeholder='Enter Username' onChange={hlChange}  /><br /><br />
                <input type="text" name='email' value={form.email} placeholder='Enter E-mail' onChange={hlChange}  /><br /><br />
                <input type="text" name='password' value={form.password} placeholder='Enter Password' onChange={hlChange}  /><br /><br />
                <input type="submit" />            
          </form>
      </center>
    </div>
  )
}

export default SignUp
