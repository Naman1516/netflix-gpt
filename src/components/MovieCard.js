import React from "react";
import { IMAGE_CDN } from "../utils/constants/constants";

const MovieCard = ({ alt, poster_path }) => {
  return (
    <div className="w-56 cursor-pointer relative group hover:w-60">
      <img alt={alt} src={IMAGE_CDN + poster_path} className="rounded" />
      <div className="hidden group-hover:block absolute inset-0 bg-black opacity-50"></div>
      <div className="hidden group-hover:block text-white -mt-40 mx-8 absolute text-2xl font-bold z-10">
        {alt}
      </div>
    </div>
  );
};

export default MovieCard;
