import { combineReducers } from "redux";
import { contactReducer } from "./contact/contactReducer";

export const rootReducer = combineReducers({
    contact: contactReducer,
});