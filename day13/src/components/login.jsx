import React, { useState } from 'react'
import Logindata from './logindata'

function Login() {
    var [obj, setObj] = useState({
        user: '',
        email: '',
        pass:''
    })
    var [arr,serArr] = useState([])
    var [userErr, setUserErr] = useState(false)
    var [emailErr,setEmailErr]=useState(false)
    var [passErr, setPassErr] = useState(false)

    var emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/


    function getData(c) {
        var { name, value } = c.target
        
        setObj({ ...obj, [name]: value })
        
    }

    function logoutData(c) {
        var { name, value } = c.target
        if (name == "user" && value.length < 5) {
            setUserErr(true)
        }
        
        if (name == "email" && !emailregex.test(value) ) {
            setEmailErr(true)
        }

        if (name == "pass" && value.length < 8 &&  !passregex.test(value) ) {
            setPassErr(true)
        }
    }

    function loginData(h){
        var { name, value } = h.target

        if (name == "user") {
            console.log(value);
            setUserErr(false)
        }

        if (name == "email") {
            setEmailErr(false)
        }
        if (name == "pass") {
            setPassErr(false)
        }

    }

    function submitData(e) {
        e.preventDefault()

        if(userErr == false && emailErr == false && passErr == false){
            serArr([...arr,obj])
            alert("Login Successfully")
        }
        else{
            alert("Please Enter Your Data")
        }
    }

  return (
    <>    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
        <form action="" onSubmit={submitData} className='form w-[400px] h-[auto] pt-[20px] pb-[25px] border rounded-[10px] p-[10px]'>
          <center>
              <h1 className='text-[25px] font-bold'>Login</h1> <br />
              <input type="text" className='w-[90%] border ps-[10px] h-[35px] rounded-[10px]' name='user' style={userErr == true ? { borderColor: "skyblue" }: { borderColor: "black" }} placeholder='Enter Your User Name' onChange={getData} onBlur={logoutData} onFocus={loginData}/>
              <br />
               {userErr == true ?<p className='ps-[25px] pt-[5px] text-left'>Wrong User Name</p> : ""}
            
              <br />
              <input type="text" className='w-[90%] border ps-[10px] h-[35px] rounded-[10px]' name='email' style={emailErr == true ? { borderColor: "skyblue" }: { borderColor: "black" }} placeholder='Enter Your Email' onChange={getData} onBlur={logoutData} onFocus={loginData}/>
              <br />
              {emailErr == true ?<p className='ps-[25px] pt-[5px] text-left'>Valid Email Id</p> : ""}

                <br />
              <input type="text" className='w-[90%] border ps-[10px] h-[35px] rounded-[10px]' name='pass' style={passErr == true ? { borderColor: "skyblue" }: { borderColor: "black" }} placeholder='Enter Your Password' onChange={getData} onBlur={logoutData} onFocus={loginData}/>
              <br />
             {passErr == true ?<p className='ps-[25px] pt-[5px] text-left'>Enter Strong Password</p> : ""}  <br />
           
           
              <input type="submit" id='sub' className='w-[50%] cursor-pointer h-[35px] rounded-[10px] bg-[#37B8F2] text-[white] font-bolt ' />
              </center>
        </form>
    </div>

    <Logindata data={arr}/>
    </>

  )
}

export default Login