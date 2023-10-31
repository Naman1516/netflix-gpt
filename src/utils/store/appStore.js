import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import headerReducer from "./headerSlice";
import moreInfoModal from "./moreInfoModal";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    header: headerReducer,
    moreInfoModal: moreInfoModal,
  },
});

export default appStore;
