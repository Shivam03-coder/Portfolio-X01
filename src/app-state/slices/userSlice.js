import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appDrawer: false,
};

export const userSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setappDrawer: (state) => {
      state.appDrawer = !state.appDrawer;
    },
  },
});

export const { setappDrawer } = userSlice.actions;
