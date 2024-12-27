import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [signup,setSignup] = useState({
        Username : "",
        Email : "",
        Password : ""
    })

    const navigate = useNavigate()

    const hlChange = (e)=>{
        const {name, value} = e.target
        setSignup({...signup, [name] : value })
    }

    const dataSubmit = (e)=>{
        e.preventDefault()

        fetch(`http://localhost:3000/username`,{
            method : "POST",
            headers : {"content-type" : "application/JSON"},
            body : JSON.stringify(signup)   
        })
        .then((Res)=>{
            return Res.json()
        })
        .then((res)=>{
            // console.log(res);
            navigate("/Login")
        })
        .catch((Err)=>{
            console.log(Err);
        })

        setSignup({
            Username : "",
            Email : "",
            Password : ""
        })
    }

    return (
    <div>
       
      <center>  <form onSubmit={dataSubmit} > <br />
            
            <h1>SignUp</h1>    <br />
            <input type="text" name='Username' value={signup.Username} onChange={hlChange} placeholder='Enter Username' /> <br /><br />
            <input type="text" name='Email' value={signup.Email} onChange={hlChange} placeholder='Enter E-mail' /><br /><br />
            <input type="text" name='Password' value={signup.Password} onChange={hlChange} placeholder='Enter Password' /><br /><br />
            <input type="submit" id="sub" />
       
        </form></center>
    
    </div>
    )
}

export default Signup
