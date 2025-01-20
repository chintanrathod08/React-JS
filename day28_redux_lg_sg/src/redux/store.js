import { combineReducers, legacy_createStore } from "redux";
import { Loginreducer } from "./loginRedux/reducer";
import { Productreducer } from "./productRedux/reducer";

const allReducer = combineReducers({
    Loginreducer,
    Productreducer
})

export const store = legacy_createStore(allReducer)

