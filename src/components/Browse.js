import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../utils/custom-hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const nowPlayingMovies = useNowPlayingMovies();

  console.log({ nowPlayingMovies });
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        MainContainer
         - VideoBackground
         - VideoTitle
        Secondary Container
          - Movie List * n
            - Cards * n
      */}
    </div>
  );
};

export default Browse;
