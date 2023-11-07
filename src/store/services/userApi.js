import { baseUrl } from "../../firebase/index.js";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: (localId) => `users/${localId}.json`,
    }),
    updateUserData: builder.mutation({
      query: ({ localId, ...data }) => ({
        url: `users/${localId}.json`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateProfileImage: builder.mutation({
      query: ({ localId, image }) => ({
        url: `users/${localId}.json`,
        method: "PATCH",
        body: { image },
      }),
    }),
  }),
});

export const {
  useGetUserDataQuery,
  useUpdateUserDataMutation,
  useUpdateProfileImageMutation,
} = userApi;
