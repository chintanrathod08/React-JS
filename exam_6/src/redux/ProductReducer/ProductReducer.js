import { ERROR, LOADING, SUCCESS } from "./actionType"

const initial = {
      isLoading : false,
      isSuccess : false,
      isError : false,
      prodata : []
}

export const ProductReducer =(state = initial,{type,payload})=>{
     switch(type){
        case LOADING : 
           return {...state,isLoading : true}
           
        case SUCCESS :
            return {...state,isLoading : false,isSuccess : true, prodata : payload }

        case ERROR :
            return {...state,isLoading : false,isError : true}

        default :
            return state
    }
}