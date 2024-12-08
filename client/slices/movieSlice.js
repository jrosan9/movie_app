import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";
const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllMovies.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
    builder.addMatcher(
      api.endpoints.getMoviesById.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default movieSlice.reducer;
