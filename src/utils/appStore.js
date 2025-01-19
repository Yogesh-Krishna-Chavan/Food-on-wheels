import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStrore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStrore;
