import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    
    const [signup,setSignup] = useState({
        user : "",
        email : "",
        password : ""
    })

    const [usrErr,setUsrerr] = useState(false)
    const [emailErr,setEmailerr] = useState(false)
    const [passErr,setPassErr] = useState(false) 

    const redirect = useNavigate()

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/

    const hlChange =(e)=>{
        const {name, value } = e.target
        setSignup({...signup,[name] : value})
        console.log(signup);
    }

    const hlBlure=(b)=>{
        const {name, value} = b.target
        if( name == "user" && value.length < 3 ){
            setUsrerr(true)
        }
        if( name == "email" && !emailRegex.test(value) ){
            setEmailerr(true)
        }
        if( name == 'password' && value.length < 6 ){
            setPassErr(true)
        }
    }

   const hlFocus=(f)=>{
      const {name, value} = f.target

      if( name == 'user'){
         setUsrerr(false)
      }
      if( name == 'email' ){
         setEmailerr(false)
      }
      if( name == 'password' ){
         setPassErr(false)
      }
   }

   const hlSubmit=(e)=>{
    e.preventDefault()
   
    if(usrErr == false && emailErr == false && passErr == false ){
     axios.post(`http://localhost:3000/user`,signup)
     .then((Res)=>{
        console.log(Res.data);
        alert("SignUp Successfull...")
        redirect("/Login")
     })
     .catch((Err)=>console.log(Err))
     }
     else{
         alert("SignUp Unsuccessfull...")    
     }
}

  return (
    <div>
       <form action="" onSubmit={hlSubmit}>
        <h1>SignUp</h1>

       <input type="text" placeholder='Enter User Name' name='user' onChange={hlChange} onBlur={hlBlure} onFocus={hlFocus} /><br />
       { usrErr == true ? <p>Please Enter Valid UserName</p> : "" }

        <br />
       <input type="text" placeholder='Enter Email-ID' name='email' onChange={hlChange} onBlur={hlBlure} onFocus={hlFocus} /><br />
       { emailErr == true ? <p>Please Enter Valid E-mail</p> : "" }

       <br />
       <input type="text" placeholder='Enter Password' name='password' onChange={hlChange} onBlur={hlBlure} onFocus={hlFocus}/><br />
       { passErr == true ? <p>Please Enter Valid Password</p> : "" }

      <br />
       <input type="submit" />
       </form>
    </div>
  )
}

export default Signup
