import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [signup,setSignup] = useState({
      user : "",
      email : "",
      password : ""
    }) 

    const hlChange = (c) =>{
      const {name,value} = c.target
      setSignup({...signup, [name] : value})
    }


    const Navigete = useNavigate() 

    const dataSubmit =(e)=>{
        e.preventDefault()

        fetch(`http://localhost:3000/users`,{
          method : "POST",
          headers : {"Conent-Type" : "application/json"},
          body : JSON.stringify(signup)
        })
        .then((Res)=>{
          return Res.json()
        })
        .then((res)=>{
          console.log(res);
          Navigete("/login")
        })
        .catch((Err)=>{
          console.log(Err);
        })

        setSignup({
          user : "",
          email : "",
          password : ""
        })

    }

  return(
    <div> 
    <center><form action="" onSubmit={dataSubmit}>
          <h1>SignUp</h1> <br />
           <input type="text" name='user' value={signup.user} placeholder='Enter User' onChange={hlChange}  /> <br /><br />
           <input type="text" name='email' value={signup.email} placeholder='Enter email' onChange={hlChange} /><br /><br />
           <input type="text" name='password' value={signup.password} placeholder='Enter password' onChange={hlChange} /><br /><br />
           <input type="submit" />
      </form></center>
    </div>
  )
}

export default Signup
