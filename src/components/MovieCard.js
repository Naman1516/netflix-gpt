import React, { useState } from "react";
import {
  IMAGE_CDN,
  MOVIE_CARD_PLACEHOLDER,
} from "../utils/constants/constants";
import MovieCardHover from "./MovieCardHover";

const MovieCard = ({ id, alt, posterPath, voteAvg, voteCount }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-36 md:w-44 lg:w-56 cursor-pointer relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative transform transition-transform duration-300 group-hover:scale-110 rounded group-hover:z-30">
        <img
          alt={alt}
          src={
            posterPath !== null
              ? IMAGE_CDN + posterPath
              : MOVIE_CARD_PLACEHOLDER + alt.split(" ").join("\\n")
          }
          className="w-full h-full rounded"
        />
        {isHovered && (
          <MovieCardHover
            id={id}
            alt={alt}
            voteAvg={voteAvg}
            voteCount={voteCount}
          />
        )}
      </div>
    </div>
  );
};

export default MovieCard;
