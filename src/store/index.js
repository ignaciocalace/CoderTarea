import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { workoutApi } from "../services/workoutsApi.js";
import myRoutinesSlice from "../features/myRoutines/myRoutinesSlice.js";
import { authApi } from "../services/authApi.js";
import authSlice from "../features/auth/authSlice.js";

const store = configureStore({
  reducer: {
    myroutines: myRoutinesSlice,
    auth: authSlice,
    [workoutApi.reducerPath]: workoutApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workoutApi.middleware, authApi.middleware),
});
setupListeners(store.dispatch);

export default store;
