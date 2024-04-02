import { createSlice } from "@reduxjs/toolkit";

const foodsSlice = createSlice({
  name: "fastFood",
  initialState: {
    cartStateNow: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartStateNow.push(action.payload);
    },
    delateToCart: (state, payload) => {
      state.cartStateNow.filter((cart) => cart.id !== payload.id);
    },
  },
});
export const { addToCart, delateToCart } = foodsSlice.actions;

export default foodsSlice.reducer;
