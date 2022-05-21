import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  show: false,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    showCart(state) {
      state.show = !state.show;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
