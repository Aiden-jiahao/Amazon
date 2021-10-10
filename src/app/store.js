import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";

// this is the global store, ex onion slice
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
