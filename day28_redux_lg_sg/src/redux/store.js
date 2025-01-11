import { legacy_createStore } from "redux";
import { Loginreducer } from "./loginRedux/reducer";

export const store = legacy_createStore(Loginreducer)