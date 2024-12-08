import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4111/api",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: () => "/movies",
    }),
    getMoviesById: builder.query({
      query: (id) => "/movies/" + id,
    }),
    getAllGenres: builder.query({
      query: () => "/genres",
    }),
  }),
});

export const {
  useGetAllMoviesQuery,
  useGetMoviesByIdQuery,
  useGetAllGenresQuery,
} = api;
