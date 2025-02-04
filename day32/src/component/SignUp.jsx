import { collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/fire'


function SignUp(){
 
    const [user,setUser] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [state, setState] = useState("")

    const UserCollection = collection(db,"user")
    useEffect(()=>{
        getData()
    },[])

  const getData = async () => {
    let data = await getDocs(UserCollection)
    let ans = data.docs.map((el)=>{
        return {id : el.id , ...el.data()}
    })
    setState(ans)
  } 

    const hlSubmit= async (e)=>{
        e.preventDefault()

        let obj = {
            user,
            email,
            pass
        }
        await addDoc(UserCollection,obj)
        getData()
        alert("User added Successfully....")
    }

    


    return (

    <div> 
       <form action="" onSubmit={hlSubmit} >
       <input type="text" placeholder='Enter User' onChange={(e)=>{setUser(e.target.value)}} />
       <input type="text" placeholder='Enter E-mail' onChange={(e)=>{setEmail(e.target.value)}} />
       <input type="text" placeholder='Enter Password' onChange={(e)=>{setPass(e.target.value)}} />
       <input type="submit" />
       </form>
       { state.map((el)=>{
            return <><h1>{el.user}</h1>
            <h2>{el.email}</h2>
            <h2>{el.pass}</h2>
            <button>Edite</button>
            <button>Delete</button>
            </>
        }) }
    </div>
  
)}

export default SignUp