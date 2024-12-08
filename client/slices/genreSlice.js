import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";

const genreSlice = createSlice({
  name: "genres",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getAllGenres.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});

export default genreSlice.reducer;
