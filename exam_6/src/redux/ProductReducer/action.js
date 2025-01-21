import axios from "axios";
import { ERROR, LOADING, SUCCESS } from "./actionType";

export const proFetch=((dispatch)=>{
    dispatch({type : LOADING})
    axios.get(`https://dummyjson.com/products`)
       .then((Res)=>{
           console.log(Res.data.products);
           dispatch({type : SUCCESS, payload : Res.data.products})
        })
        .catch((Err)=>{
            dispatch({type : ERROR})
            console.log(Err);
        }) 
})

