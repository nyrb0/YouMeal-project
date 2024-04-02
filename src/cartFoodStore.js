import { configureStore } from "@reduxjs/toolkit";
import purchased from "./purchased";
const store = configureStore({
  reducer: {
    foodsCart: purchased,
  },
});
export default store;
