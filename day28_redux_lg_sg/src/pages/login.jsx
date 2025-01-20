import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ERROR, LOADING, SUCCESS, WRONGPASS } from '../redux/loginRedux/actionType'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [state, setState] = useState({
      email : "",
      password : ""
  })

  const navigate = useNavigate()

  const hlChange=(e)=>{
      const {name, value} = e.target
      setState({...state,[name] : value})
   }

   const data = useSelector((st)=>st)
   console.log(data);

   const dispatch = useDispatch()
   

   const hlSubmit=(e)=>{
    e.preventDefault()
    // dispatch({ type : LOADING })
    axios.get(`http://localhost:3000/user?email=${state.email}`)
    .then((res)=>{
      console.log(res);
      if(res.data[0].password == state.password){
        dispatch({type : SUCCESS, payload : res.data[0].user})
        navigate("/")
      }
      else{
        dispatch({type : WRONGPASS})
      }
    })
    .catch((Err)=>{
      console.log(Err);
      dispatch({ type : ERROR})
    })
   }

  return (
    <div>
      <form action="" onSubmit={hlSubmit}>
      <h1>Login</h1>
      <input type="text" placeholder='Enter email' name='email' onChange={hlChange}  /> <br /> <br />
      <input type="text" placeholder='Enter password' name='password' onChange={hlChange}  /> <br /><br />
      <input type="submit" />
      </form>
    </div>
  )
}

export default Login


