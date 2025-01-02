import React, { useEffect, useState } from 'react'

function Loginlist() {

    const [login,setLogin] = useState([])
    const [bool,setBool] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:3000/username`)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setLogin(res)
            setBool(!bool)
        })
        .catch((err)=>{
            console.log(err);
          })
    },[bool])

    const handleDelete =(ID)=>{
      fetch(`http://localhost:3000/username/${ID}`,{
        method : "DELETE",
      })
      .then((Res)=>{
       console.log(Res);
      })
    }

    

  return (
    <div>
        {login.map((el)=>{
            return <div key={el.id}>
            <h1>{el.username}</h1>
            <h1>{el.email}</h1>
            <h1>{el.password}</h1>
            <button onClick={()=>{handleEdit(el.id)}}>Edit</button>
            <button onClick={()=>{handleDelete(el.id)}}>Delete</button>
            </div>
        })}
    </div>
  )
}

export default Loginlist

