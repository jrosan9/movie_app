import { configureStore } from "@reduxjs/toolkit";
import { api } from "./slices/api";
import movieSlice from "./slices/movieSlice";
import genreSlice from "./slices/genreSlice";

const store = configureStore({
  reducer: {
    movies: movieSlice,
    genres: genreSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
