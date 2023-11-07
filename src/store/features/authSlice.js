import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  localId: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return {
        user: action.payload.email,
        token: action.payload.idToken,
        localId: action.payload.localId,
      };
    },
    logoutUser: (state) => {
      Object.assign(state, initialState);
    },
  },
});
export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
