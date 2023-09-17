import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    movieNames: null,
    movieResults: null,
    isSearchEnabled: true,
  },
  reducers: {
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

export const { addSearchResult, toggleGptSearchButton } = gptSlice.actions;

export default gptSlice.reducer;
