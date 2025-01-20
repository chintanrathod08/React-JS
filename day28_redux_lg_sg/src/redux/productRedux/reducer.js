import { ERROR, LOADING, SUCCESS } from "./actionType"

const proInitial = {
    proData : [],
    isLoding : false,
    isError : false,
    isSuccess : false
}

export const Productreducer = (state,{type,payload})=>{
   switch (type) {
        case LOADING :
            return {...state,isLoding : true} 
       
        case SUCCESS :
            return {...state,isLoding : false, isSuccess : true, proData : payload}
    
        case ERROR :
            return {...state,isLoding : false,isError : true}
    
        default:
            return state
   }           
}