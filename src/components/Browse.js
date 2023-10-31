import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMovieSections from "../utils/custom-hooks/useMovieSections";
import Footer from "./Footer";
import MoreInfoModal from "./MoreInfoModal/MoreInfoModal";
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
      {isMoreInfoVisible && <MoreInfoModal />}

      <Footer />
    </div>
  );
};

export default Browse;
