import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { LoginReducer } from "./LoginReducer/loginReducer";
import { thunk } from "redux-thunk";
import { ProductReducer } from "./ProductReducer/productReducer";

const allReducer = combineReducers({
    LoginReducer,
    ProductReducer
}) 

export const store = legacy_createStore(allReducer,applyMiddleware(thunk))