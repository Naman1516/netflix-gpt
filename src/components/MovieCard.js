import React from "react";
import {
  IMAGE_CDN,
  MOVIE_CARD_PLACEHOLDER,
} from "../utils/constants/constants";

const MovieCard = ({ alt, poster_path }) => {
  return (
    <div className="w-36 md:w-44 lg:w-56 cursor-pointer relative group">
      <div className="relative transform transition-transform duration-300 group-hover:scale-110 rounded">
        <img
          alt={alt}
          src={
            poster_path !== null
              ? IMAGE_CDN + poster_path
              : MOVIE_CARD_PLACEHOLDER + alt.split(" ").join("\\n")
          }
          className="w-full h-full rounded"
        />
        <div className="hidden group-hover:block absolute inset-0 bg-black opacity-50 rounded"></div>
        <div className="hidden group-hover:block text-white bottom-10 mx-4 absolute text-md md:text-lg font-bold z-10 rounded">
          {alt}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
