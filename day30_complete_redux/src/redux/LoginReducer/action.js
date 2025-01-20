import axios from "axios"
import { LOGERROR, LOGLOADING, LOGSUCCESS } from "./actionType"

export const LoginFetch=((dispatch)=>(loginEmail,loginPass)=>{
    dispatch({type : LOGLOADING})
    axios.get(`http://localhost:3000/username?email=${loginEmail}`)
       .then((Res)=>{
         if(Res.data[0].password == loginPass){
            dispatch({type : LOGSUCCESS,paylaod : Res.data[0].user })
            alert("User Login Successfull...")
         }else{
            alert("Password Wrong")
         }
       })
       .catch((Err)=>{
        console.log(Err);
        dispatch({type : LOGERROR})
        alert("Invalid Data")
        })
})