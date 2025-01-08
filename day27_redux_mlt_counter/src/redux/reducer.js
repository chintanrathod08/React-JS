import { DEC1, INC1, INPUT, MLT1, MLT2 } from "./actionType"


const value = {
    count1 : 0,
    count2 : 2,
    count3 : 2
}

export const reducer1 = (state = value ,{type,payload}) => {
     switch(type){
        case INC1 :
            return {...state,count1 : state.count1 + 5}

        case DEC1  :
            return {...state,count1 : state.count1 - 5}

        case MLT1  :
            return {...state,count2 : state.count2 * state.count2}

        case MLT2  :
            return {...state,count2 : state.count2 / 2}
    
            case INPUT  :
                return {...state,count3 : state.count3 * payload}
        
        default :
            return state
     }

}

