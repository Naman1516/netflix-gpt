import React from "react";
import { IMAGE_CDN } from "../utils/constants/constants";

const MovieCard = ({ alt, poster_path }) => {
  if (!poster_path) return null;

  return (
    <div className="w-36 md:w-44 lg:w-56 cursor-pointer relative group">
      <div className="relative">
        <img
          alt={alt}
          src={IMAGE_CDN + poster_path}
          className="rounded w-full h-full transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="hidden group-hover:block group-hover:scale-110 absolute inset-0 bg-black opacity-50 rounded"></div>
        <div className="hidden group-hover:block text-white top-10 mx-8 absolute text-lg font-bold z-10">
          {alt}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
