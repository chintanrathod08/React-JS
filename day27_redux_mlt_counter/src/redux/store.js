import { legacy_createStore } from "redux";
import { reducer1 } from "./reducer";

export const store = legacy_createStore(reducer1)