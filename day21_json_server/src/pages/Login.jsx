import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Signup() {

    const [signup,setSignup] = useState({
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

        fetch(`http://localhost:3000/username?Email=${signup.Email}`)
        .then((Res)=>{
            return Res.json()
        })
        .then((res)=>{
        if(res.length > 0){
            if(res[0].Password == signup.Password){
                alert("Login Successfull")
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

        setSignup({
            Email : "",
            Password : ""
        })
    }

    return (
    <div>
       <br />
     <center>   <form onSubmit={dataSubmit} >
            
            <h1>Login</h1>    <br />
            <input type="text" name='Email' value={signup.Email} onChange={hlChange} placeholder='Enter E-mail' /><br /><br />
            <input type="text" name='Password' value={signup.Password} onChange={hlChange} placeholder='Enter Password' /><br /><br />
            <input type="submit" id="sub" />
       
        </form>
        </center>     
    </div>
    )
}

export default Signup

