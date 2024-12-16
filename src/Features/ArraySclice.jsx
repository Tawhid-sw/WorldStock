import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
};

const ArraySclice = createSlice({
  name: "Array",
  initialState,
  reducers: {
    // Add new item
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    // Remove item
    removeItem: (state, action) => {
      state.item = state.item.filter((_, index) => index !== action.payload);
    },
    // Set item
    setItem: (state, action) => {
      state.item = action.payload;
    },
    // Clear item
    clearItem: (state) => {
      state.item = [];
    },
  },
});

export const { addItem, removeItem, setItem, clearItem } = ArraySclice.actions;
export default ArraySclice.reducer;
