import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants/constants";
import Header from "./Header";
import { useSelector } from "react-redux";
import MoreInfoModal from "./MoreInfoModal/MoreInfoModal";

const GptSection = () => {
  const isMoreInfoVisible = useSelector(
    (store) => store.moreInfoModal.isVisible
  );

  return (
    <div>
      <Header />
      <div className="fixed -z-10">
        <img
          src={BG_IMG}
          alt="login background"
          className="h-screen w-screen"
        />
      </div>

      <GptSearchBar />
      <GptMovieSuggestions />
      {isMoreInfoVisible && <MoreInfoModal />}
    </div>
  );
};

export default GptSection;
