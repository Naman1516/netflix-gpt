import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <React.Fragment>
          <MainContainer />
          <SecondaryContainer />
        </React.Fragment>
      )}
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
