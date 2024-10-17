import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cart/cart.jsx";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
