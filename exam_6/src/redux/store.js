import { applyMiddleware, legacy_createStore } from "redux";
import { ProductReducer } from "./ProductReducer/ProductReducer";
import { thunk } from "redux-thunk";

export const store = legacy_createStore(ProductReducer,applyMiddleware(thunk))