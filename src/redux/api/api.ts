/* eslint-disable @typescript-eslint/no-explicit-any */
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

    getMovieReviews: builder.query({
      query: (slug) => ({
        url: `/movies/${slug}/reviews`,
        method: "GET",
      }),
    }),

    getMovieDetailsAndReviews: builder.query({
      queryFn: async (slug: string): Promise<any> => {
        try {
          const [movieResponse, reviewsResponse] = await Promise.all([
            fetch(`http://localhost:5000/api/movies/${slug}`),
            fetch(`http://localhost:5000/api/movies/${slug}/reviews`),
          ]);

          if (!movieResponse.ok || !reviewsResponse.ok) {
            throw new Error("Network response was not ok.");
          }
          const [movieData, reviewsData] = await Promise.all([
            movieResponse.json(),
            reviewsResponse.json(),
          ]);

          // Combine results
          return {
            data: {
              movie: movieData,
              reviews: reviewsData,
            },
          };
        } catch (error) {
          return error;
        }
      },
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetSingleMovieQuery,
  useAddRatingMutation,
  useGetMovieReviewsQuery,
  useGetMovieDetailsAndReviewsQuery,
} = baseApi;
