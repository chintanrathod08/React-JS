import { INC1, DEC1, INC2, DEC2 } from "./actionType";

const count = 0

export const reducer1 = (state = count,action)=>{

    switch(action.type){
        case INC1 :
            return state = state + 1

        case DEC1 :
            return state = state - 1
            
        default :
            return state
    }

}

export const reducer2 = (state = count,action)=>{

    switch(action.type){
        case INC2 :
            return state = state + 1

        case DEC2 :
            return state = state - 1
            
        default :
            return state
    }

}