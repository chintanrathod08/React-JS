import { ERROR, LOADING, WRONGPASS, SUCCESS } from "./actionType"

const count = {
    isLoding :  false,
    isLogin : false,
    isError : false,
    isPosswprd : false,    
    user : ""
}

export const Loginreducer =(state = count , {type,payload} )=>{
    switch(type){
        case LOADING :
            return {...state,isLoding : true}

        case WRONGPASS :
            return {...state,isLoding : false, isPosswprd : true}

        case SUCCESS :
            return {...state,isLoding : false, isLogin : true, user : payload}

        case ERROR : 
            return {...state,isLoding : false, isLogin : false, isError : true}
        
        default : 
            return state
    }
}