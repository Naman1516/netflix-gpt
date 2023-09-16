import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleSideMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSideMenu } = headerSlice.actions;
export default headerSlice.reducer;
