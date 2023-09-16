import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
    isSearchEnabled: true,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;

      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    toggleGptSearchButton: (state) => {
      state.isSearchEnabled = !state.isSearchEnabled;
    },
  },
});

export const { toggleGptSearchView, addSearchResult, toggleGptSearchButton } =
  gptSlice.actions;

export default gptSlice.reducer;
