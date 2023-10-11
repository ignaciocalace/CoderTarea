import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../firebase";

export const workoutApi = createApi({
  reducerPath: "workoutApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getWorkouts: builder.query({
      query: () => `defRoutines.json`,
    }),
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    getWorkoutsCategory: builder.query({
      query: (category) =>
        `defRoutines.json?orderBy="category"&equalTo="${category}"`,
    }),
  }),
});
export const {
  useGetWorkoutsQuery,
  useGetCategoriesQuery,
  useGetWorkoutsCategoryQuery,
} = workoutApi;
