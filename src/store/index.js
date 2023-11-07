import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../store/services/userApi.js";
import { authApi } from "../store/services/authApi.js";
import authSlice from "../store/features/authSlice.js";
import userSlice from "../store/features/userSlice.js";
import { myRoutinesApi } from "./services/myRoutinesApi.js";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import myRoutinesSlice from "../store/features/myRoutinesSlice.js";
import currentTrainingSlice from "./features/currentTrainingSlice.js";
import { currentTrainingApi } from "./services/currentTrainingApi.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    myRoutines: myRoutinesSlice,
    currentTraining: currentTrainingSlice,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [myRoutinesApi.reducerPath]: myRoutinesApi.reducer,
    [currentTrainingApi.reducerPath]: currentTrainingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      myRoutinesApi.middleware,
      authApi.middleware,
      userApi.middleware,
      currentTrainingApi.middleware
    ),
});
setupListeners(store.dispatch);

export default store;
