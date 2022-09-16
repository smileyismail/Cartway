import { configureStore } from "@reduxjs/toolkit";

import operationsSlice from "./operationsSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: { operations: operationsSlice.reducer, cart: cartSlice.reducer },
});

export default store;
