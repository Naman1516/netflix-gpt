import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants/constants";
import Header from "./Header";

const GptSection = () => {
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
    </div>
  );
};

export default GptSection;
