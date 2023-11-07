import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  email: null,
  image: null,
  fullName: null,
  birthDate: null,
  gender: null,
  height: null,
  heightUnit: null,
  weight: null,
  weightUnit: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {
        userName,
        email,
        image,
        fullName,
        birthDate,
        gender,
        height,
        heightUnit,
        weight,
        weightUnit,
      } = action.payload;

      state.userName = userName;
      state.email = email;
      state.image = image;
      state.fullName = fullName;
      state.birthDate = birthDate;
      state.gender = gender;
      state.height = height;
      state.heightUnit = heightUnit;
      state.weight = weight;
      state.weightUnit = weightUnit;
    },
    updateUser: (state, action) => {
      const {
        fullName,
        birthDate,
        gender,
        height,
        heightUnit,
        weight,
        weightUnit,
      } = action.payload;
      state.fullName = fullName;
      state.birthDate = birthDate;
      state.gender = gender;
      state.height = height;
      state.heightUnit = heightUnit;
      state.weight = weight;
      state.weightUnit = weightUnit;
    },
    clearUser: (state) => {
      Object.assign(state, initialState);
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { setUser, updateUser, clearUser, setImage } = userSlice.actions;

export default userSlice.reducer;
