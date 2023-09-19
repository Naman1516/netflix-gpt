import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovieSections from "../utils/custom-hooks/useMovieSections";
import Footer from "./Footer";

const Browse = () => {
  useMovieSections();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <Footer />
    </div>
  );
};

export default Browse;
