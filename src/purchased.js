import { createSlice } from "@reduxjs/toolkit";

const foodsSlice = createSlice({
  name: "fastFood",
  initialState: {
    cartStateNow: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartStateNow.find(
        (item) => item.id === action.payload.id
      );
      if (state.cartStateNow.length !== 0) {
        if (existingItem) {
          return state;
        }
      }

      state.cartStateNow.push(action.payload);
    },
    delateToCart: (state, action) => {
      state.cartStateNow = state.cartStateNow.filter(
        (cart) => cart.id !== action.payload.id
      );
    },
  },
});
export const { addToCart, delateToCart } = foodsSlice.actions;

export default foodsSlice.reducer;
