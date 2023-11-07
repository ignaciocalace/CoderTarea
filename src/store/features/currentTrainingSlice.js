import { createSlice } from "@reduxjs/toolkit";

const currentTrainingSlice = createSlice({
  name: "currentTraining",
  initialState: null,
  reducers: {
    setTraining: (state, action) => {
      return action.payload;
    },
    clearTraining: (state) => {
      return null;
    },
    markExerciseComplete: (state, action) => {
      if (state) {
        state.exercises = state.exercises.map((exercise) => {
          if (exercise.id === action.payload.exerciseId) {
            return { ...exercise, completed: true };
          }
          return exercise;
        });
      }
    },
  },
});

export const { setTraining, clearTraining, markExerciseComplete } =
  currentTrainingSlice.actions;
export default currentTrainingSlice.reducer;
