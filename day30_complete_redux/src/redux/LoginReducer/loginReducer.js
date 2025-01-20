import { LOGERROR, LOGLOADING, LOGSUCCESS } from "./actionType"

const initial = {
    isLoading : false,
    isSuccess : false,
    isError : false,
    user : ""
} 

export const LoginReducer =(state = initial,{type,payload})=>{
        switch(type){
            case  LOGLOADING :
                return {...state, isLoading : true}
                
            case LOGSUCCESS :
                return {...state, isLoading : false, isSuccess : true, user : payload }

            case LOGERROR :
                return {...state, isLoading : false, isError : true}

            default :
                return state 
        }
}