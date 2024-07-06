import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["movies"],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        url: "/movies",
        method: "GET",
      }),
      providesTags: ["movies"],
    }),
    getSingleMovie: builder.query({
      query: (slug) => ({
        url: `/movies/${slug}`,
        method: "GET",
      }),
      providesTags: ["movies"],
    }),

    addRating: builder.mutation({
      query: ({ data, slug }) => ({
        url: `/movies/${slug}/review`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["movies"],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetSingleMovieQuery,
  useAddRatingMutation,
} = baseApi;
