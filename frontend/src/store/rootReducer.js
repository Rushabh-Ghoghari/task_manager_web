import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./Auth";
import { taskReducer } from "./Task";
const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
});

export default rootReducer;
