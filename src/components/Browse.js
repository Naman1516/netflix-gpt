import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import useMovieSections from "../utils/custom-hooks/useMovieSections";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useMovieSections();

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
    </div>
  );
};

export default Browse;
