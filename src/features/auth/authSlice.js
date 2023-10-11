import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, token: null, imageCamera: null };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return {
        user: action.payload.email,
        token: action.payload.idToken,
      };
    },
    logoutUser: (state) => {
      return {
        user: null,
        token: null,
      };
    },
    setCameraImage: (state, action) => {
      return { ...state, imageCamera: action.payload };
    },
  },
});
export const { loginUser, logoutUser, setCameraImage } = authSlice.actions;

export default authSlice.reducer;
