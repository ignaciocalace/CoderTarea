import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      const exists = state.some((product) => product.id === action.payload.id);

      if (!exists) {
        state.push(action.payload);
      }
    },
    removeProduct: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addProduct, removeProduct } = wishlistSlice.actions;
export default wishlistSlice.reducer;
