import { applyMiddleware, legacy_createStore } from "redux";
import { LoginReducer } from "./LoginReducer/loginReducer";
import { thunk } from "redux-thunk";


export const store = legacy_createStore(LoginReducer,applyMiddleware(thunk))