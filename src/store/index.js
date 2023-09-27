import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "../features/wishList/wishListSlice.js";

const store = configureStore({
  reducer: {
    wishlist: wishListSlice,
  },
});

export default store;
