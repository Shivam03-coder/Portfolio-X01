import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./rootreducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Apiservices } from "./middlewares/Apiservices";

export const Store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(Apiservices.middleware),
});

setupListeners(Store.dispatch);