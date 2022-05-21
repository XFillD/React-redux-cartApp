import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import cartItemReducer from "./cartItem-slice";

const store = configureStore({
  reducer: { cart: cartReducer, cartItem: cartItemReducer },
});

export default store;
