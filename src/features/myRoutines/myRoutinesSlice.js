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
    removeRoutine: (state, action) => {
      return state.filter((routine) => routine.id !== action.payload.id);
    },
  },
});

export const { addRoutine, removeRoutine } = myRoutinesSlice.actions;
export default myRoutinesSlice.reducer;
