import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [state,setState] = useState({
        user : "",
        email : "",
        password : ""
    })

    const [userErr,setUserErr] = useState(false)
    const [emailErr,setEmailErr] = useState(false)
    const [passErr,setPassErr] = useState(false)

    var emailregex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    var passregex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@.#$!%?&^])[A-Za-z\d@.#$!%?&]{8,15}$/

    const navigate = useNavigate()

    const hlBlur=(e)=>{
      const{name,value} = e.target
      if(name == "user" && value.length <= 0){
        setUserErr(true)
      }
      if(name == "email" && !emailregex.test(value)){
        setEmailErr(true)
      }
      if(name == "password" && !passregex.test(value)){
        setPassErr(true)
      }
    }

    const hlFocus=(e)=>{
      const{name,value} = e.target
      if(name == "user"){
        setUserErr(false)
      }
      if(name == "email"){
        setEmailErr(false)
      }
      if(name == "password"){
        setPassErr(false)
      }
    }

    const hlChange=(e)=>{
      const {name , value} = e.target
      setState({...state,[name] : value})
      console.log(state);
    }

    const hlSubmit=(e)=>{
        e.preventDefault()
        
        axios.post(`http://localhost:3000/username`,state)
        .then((Res)=>console.log(Res))
        .catch((Err)=>console.log(Err))
           
        if(userErr == false && emailErr == false && passErr == false){
          alert("Signup Successfully")
          navigate("/Login")
        }
        else{
          alert("Signup Unsuccessfull")
        }
    }

  return (
    <div>
        <form action="" onSubmit={hlSubmit} >
            <h1>SignUp</h1>
            <input type="text" placeholder='Enter name' name='user'  onChange={hlChange} onBlur={hlBlur} onFocus={hlFocus}/> <br />
            {userErr == true ? <p>Please Enter Username</p> : ""}
            <br />
            <input type="text" placeholder='Enter email' name='email'  onChange={hlChange} onBlur={hlBlur} onFocus={hlFocus} /> <br />
            {emailErr == true ? <p>Please Enter Email-ID</p> : ""}
            <br />
            <input type="text" placeholder='Enter password' name='password'  onChange={hlChange} onBlur={hlBlur} onFocus={hlFocus}/> <br />
            {passErr == true ? <p>Enter Strong Password</p> : ""}
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup

