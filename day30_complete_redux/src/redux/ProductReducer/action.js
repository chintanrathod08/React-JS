import axios from "axios"
import { ERROR, LOADING, SUCCESS } from "./actionType"

export const proFetch =(dispatch)=>{
    dispatch({type : LOADING})
    axios.get(`http://localhost:3000/products`)
    .then((Res)=>{
        dispatch({type : SUCCESS , payload : Res.data})
    })
    .catch((Err)=>{
        dispatch({type : ERROR})
    })
}