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

    addRating: builder.mutation({
      query: ({ data, slug }) => {
        console.log(data, slug);
        return {
          url: `/movies/${slug}/review`,
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetSingleMovieQuery,
  useAddRatingMutation,
} = baseApi;
