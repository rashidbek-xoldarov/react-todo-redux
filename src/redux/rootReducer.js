import { combineReducers } from "redux";
import { todoReducer } from "./todo/TodoReducer";

export const rootReducer = combineReducers({
  todo: todoReducer,
});
