import { createSlice } from "@reduxjs/toolkit";

const initialOperationsState = { cartIsVisible: false };

const operationsSlice = createSlice({
  name: "operations slice",
  initialState: initialOperationsState,
  reducers: {
    toggleShowCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const operationsSliceActions = operationsSlice.actions;

export default operationsSlice;
