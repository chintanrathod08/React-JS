import { legacy_createStore } from "redux";
import { LoginReducer } from "./loginReducer/reducer";

export const store = legacy_createStore(LoginReducer)