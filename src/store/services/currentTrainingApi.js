import { baseUrl } from "../../firebase/index.js";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currentTrainingApi = createApi({
  reducerPath: "currentTrainingApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCurrentTraining: builder.query({
      query: (localId) => `currentTraining/${localId}.json`,
    }),
    updateCurrentTraining: builder.mutation({
      query: ({ localId, ...data }) => ({
        url: `currentTraining/${localId}.json`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteCurrentTraining: builder.mutation({
      query: (localId) => ({
        url: `currentTraining/${localId}.json`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetCurrentTrainingQuery,
  useUpdateCurrentTrainingMutation,
  useDeleteCurrentTrainingMutation,
} = currentTrainingApi;
