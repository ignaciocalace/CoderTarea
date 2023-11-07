import { baseUrl } from "../../firebase/index.js";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myRoutinesApi = createApi({
  reducerPath: "myRoutinesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getWorkouts: builder.query({
      query: () => `defRoutines.json`,
    }),

    getUserRoutines: builder.query({
      query: (localId) => `userRoutines/${localId}.json`,
    }),
    createUserRoutine: builder.mutation({
      query: ({ localId, routine }) => ({
        url: `userRoutines/${localId}/${routine.id}.json`,
        method: "POST",
        body: routine,
      }),
    }),
    updateUserRoutine: builder.mutation({
      query: ({ localId, routine }) => ({
        url: `userRoutines/${localId}/${routine.id}.json`,
        method: "PUT",
        body: routine,
      }),
    }),
    deleteUserRoutine: builder.mutation({
      query: ({ localId, routineId }) => ({
        url: `userRoutines/${localId}/${routineId}.json`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetWorkoutsQuery,
  useGetUserRoutinesQuery,
  useCreateUserRoutineMutation,
  useUpdateUserRoutineMutation,
  useDeleteUserRoutineMutation,
} = myRoutinesApi;
