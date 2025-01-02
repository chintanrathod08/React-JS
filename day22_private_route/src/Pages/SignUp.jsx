import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [form,setForm] = useState({
        username : "",
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

        fetch(`http://localhost:3000/username`,{
            method : "POST",
            headers : {"content-type" : "application/JSON"},
            body : JSON.stringify(form)
        })
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            console.log(res);
            navigate("/login")
        })
        .catch((err)=>{
            console.log(err);
            
        })
        setForm({
            username : "",
            email : "",
            password : ""
        })
    }

  return (
    <div> 
        <center> <br />
            <h1>Signup</h1> <br />
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='username' placeholder='username' onChange={handleChange}/><br /><br />
                <input type="text" name='email' placeholder='email' onChange={handleChange}/><br /><br />
                <input type="text" name='password' placeholder='password' onChange={handleChange}/><br /><br />
                <input type="submit" />
            </form>
        </center>
    </div>
  )
}

export default Signup