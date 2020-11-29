import { combineReducers } from "redux";
import userReducer from "./userReducer";
import autoReducer from "./autoReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  auto: autoReducer,
});
