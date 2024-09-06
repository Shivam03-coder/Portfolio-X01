import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slices/userSlice";
import { Apiservices } from "./middlewares/Apiservices";

export const rootReducers = combineReducers({
  appstate: userSlice.reducer,
  [Apiservices.reducerPath]: Apiservices.reducer,
});