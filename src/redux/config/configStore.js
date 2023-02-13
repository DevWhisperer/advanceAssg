import { combineReducers, createStore } from "redux";
import listUpdate from "../modules/listUpdate";

const rootReducer = combineReducers({ listUpdate });
export const store = createStore(rootReducer);
