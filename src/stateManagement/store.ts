import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;

// Define RootState type based on the store configuration
export type RootState = ReturnType<typeof store.getState>;
