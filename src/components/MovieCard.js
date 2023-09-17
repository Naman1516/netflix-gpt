import React from "react";
import {
  IMAGE_CDN,
  MOVIE_CARD_PLACEHOLDER,
} from "../utils/constants/constants";
import VoteIcon from "./Icons/VoteIcon";

const MovieCard = ({ alt, posterPath, voteAvg, voteCount }) => {
  return (
    <div className="w-36 md:w-44 lg:w-56 cursor-pointer relative group">
      <div className="relative transform transition-transform duration-300 group-hover:scale-110 rounded">
        <img
          alt={alt}
          src={
            posterPath !== null
              ? IMAGE_CDN + posterPath
              : MOVIE_CARD_PLACEHOLDER + alt.split(" ").join("\\n")
          }
          className="w-full h-full rounded"
        />
        <div className="group-hover:block absolute inset-0 bg-black opacity-50 rounded"></div>
        <div className="group-hover:block text-white bottom-10 mx-4 absolute z-10 rounded">
          <h3 className="text-md md:text-lg font-bold ">{alt}</h3>
          <div className="flex items-center text-sm mt-2">
            <VoteIcon height={13} width={13} />
            <span className="ml-1">
              {voteAvg} &nbsp; | &nbsp; {voteCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
