import React from "react";
import ShimmerMovieCard from "./ShimmerMovieCard";

const ShimmerMovieList = () => {
  return (
    <div>
      <div className="bg-slate-600 h-10 w-48 rounded ml-2"></div>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2 p-2">
          <ShimmerMovieCard />
          <ShimmerMovieCard />
          <ShimmerMovieCard />
          <ShimmerMovieCard />
          <ShimmerMovieCard />
          <ShimmerMovieCard />
          <ShimmerMovieCard />
          <ShimmerMovieCard />
        </div>
      </div>
    </div>
  );
};

export default ShimmerMovieList;
