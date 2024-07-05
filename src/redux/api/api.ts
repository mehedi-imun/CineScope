import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        url: "/movies",
        method: "GET",
      }),
    }),
    getSingleMovie: builder.query({
      query: (slug) => ({
        url: `/movies/${slug}`,
        method: "GET",
      }),
    }),

    addMovies: builder.mutation({
      query: (data) => ({
        url: "/movies",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetSingleMovieQuery,
  useAddMoviesMutation,
} = baseApi;
