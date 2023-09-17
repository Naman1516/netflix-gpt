import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    topRatedMovies: null,
    trendingMovies: null,
    genres: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailer = action.payload;
    },
    addPouplarMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addGenre: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPouplarMovies,
  addTrailerVideo,
  addTopRatedMovies,
  addTrendingMovies,
  addGenre,
} = moviesSlice.actions;

export default moviesSlice.reducer;
