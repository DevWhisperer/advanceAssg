import { combineReducers, createStore } from "redux";
import listUpdate from "../modules/listUpdate";
import darkMode from "../modules/darkMode";

const rootReducer = combineReducers({ listUpdate, darkMode });
export const store = createStore(rootReducer);
