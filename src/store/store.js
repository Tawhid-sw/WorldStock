import { configureStore } from "@reduxjs/toolkit";
import ApiData from "../Features/ApiSclice";

export const store = configureStore({
  reducer: {
    apiData: ApiData,
    // Array: arrayReducer,
  },
});
