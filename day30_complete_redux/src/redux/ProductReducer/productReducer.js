import { ERROR, LOADING, SUCCESS } from "./actionType"

const provalue ={
    isLoading : false,
    isError : false,
    prodata : []
}

export const ProductReducer =(state = provalue,{type,payload})=>{
        switch(type){
            case LOADING : 
               return {...state,isLoading : true}

            case SUCCESS : 
                return {...state,isLoading : false, prodata : payload}

            case ERROR :
                return {...state,isLoading : false, isError : true}
            
            default :
                return state
        }
}