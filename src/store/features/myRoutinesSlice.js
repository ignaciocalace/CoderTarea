import { createSlice } from "@reduxjs/toolkit";

const myRoutinesSlice = createSlice({
  name: "myRoutines",
  initialState: [],
  reducers: {
    addRoutine: (state, action) => {
      const exists = state.some((routine) => routine.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    updateRoutine: (state, action) => {
      return state.map((routine) =>
        routine.id === action.payload.id ? action.payload : routine
      );
    },
    removeRoutine: (state, action) => {
      return state.filter((routine) => routine.id !== action.payload.id);
    },
    clearMyRoutines: (state) => {
      return [];
    },
  },
});

export const { addRoutine, updateRoutine, removeRoutine, clearMyRoutines } =
  myRoutinesSlice.actions;
export default myRoutinesSlice.reducer;
