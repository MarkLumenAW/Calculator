import { configureStore } from "@reduxjs/toolkit";
import { displayReducer } from "../reducers/displaySlice";

export const store = configureStore({
  reducer: {
    display: displayReducer,
  }
})