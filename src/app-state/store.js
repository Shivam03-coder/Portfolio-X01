import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./rootreducer";

export const Store = configureStore({
  reducer: rootReducers,
});

