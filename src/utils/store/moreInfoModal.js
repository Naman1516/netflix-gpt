import { createSlice } from "@reduxjs/toolkit";

const moreInfoModal = createSlice({
  name: "moreInfoModal",
  initialState: {
    isVisible: false,
    info: {},
    trailer: null,
  },
  reducers: {
    toggleModal: (state) => {
      state.isVisible = !state.isVisible;
    },
    setMovieDetails: (state, action) => {
      state.info = action.payload;
    },
    setMovieTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    resetModal: () => {
      return {
        isVisible: false,
        info: {},
        trailer: null,
      };
    },
  },
});

export const { toggleModal, setMovieDetails, setMovieTrailer, resetModal } =
  moreInfoModal.actions;

export default moreInfoModal.reducer;
