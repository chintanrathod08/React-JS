import { ERROR, LOADING, SUCCESS, WRONGPASS } from "./actionType"

const initial = {
    isLoading : false,
    isLogin : false,
    isError : false,
    isPass : false,
    username : ""
}

export const LoginReducer = (state = initial,{type,payload})=>{
    switch(type){
        case LOADING :
            return {...state, isLoading : true}

        case WRONGPASS :
            return {...state,isLoading : false, isPass : true}
        
        case SUCCESS :
            return {...state,isLoading : false, isLogin : true, username : payload }
    
        case ERROR :
            return {...state,isLoading: false,isError : true, isPass : false } 
            
        default :
            return state
        }
  } 