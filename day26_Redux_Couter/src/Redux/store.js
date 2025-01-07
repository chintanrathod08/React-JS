import { combineReducers, legacy_createStore } from "redux";
import { reducer1, reducer2 } from "./reducer";


const reducer = combineReducers ({
     ctr1 : reducer1,
     ctr2 : reducer2
});


export const store = legacy_createStore(reducer)
