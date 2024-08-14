import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";

export const rootReducers = combineReducers({
  appstate: userSlice.reducer,
});