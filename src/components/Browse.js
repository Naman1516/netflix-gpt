import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovieSections from "../utils/custom-hooks/useMovieSections";
import Footer from "./Footer";
import MoreInfo from "./MoreInfoModal/MoreInfo";
import { useSelector } from "react-redux";

const Browse = () => {
  useMovieSections();

  const isMoreInfoVisible = useSelector(
    (store) => store.moreInfoModal.isVisible
  );
  console.log("Friom browxse");
  console.log({ isMoreInfoVisible });

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {isMoreInfoVisible && <MoreInfo />}

      <Footer />
    </div>
  );
};

export default Browse;
