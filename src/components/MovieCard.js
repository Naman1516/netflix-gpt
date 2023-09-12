import React from "react";
import { IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ alt, poster_path }) => {
  return (
    <div className="w-56 cursor-pointer">
      <img alt={alt} src={IMAGE_CDN + poster_path} />
    </div>
  );
};

export default MovieCard;
