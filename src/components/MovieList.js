import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import ScrollLeftRight from "./ScrollLeftRight";

const MovieList = ({ title, movies }) => {
  const scrollableDivRef = useRef(null);

  return (
    <div className="pt-4 relative">
      {/* <ScrollLeftRight targetElement={scrollableDivRef.current} /> */}
      <h2 className="text-2xl md:text-3xl text-white font-semibold py-4 px-2">
        {title}
      </h2>
      <div
        className="flex overflow-y-hidden overflow-x-scroll no-scrollbar scroll-smooth"
        ref={scrollableDivRef}
      >
        <div className="flex gap-6 p-2">
          {movies?.map((movie) => (
            <div>
              <MovieCard
                key={movie.title}
                alt={movie.title}
                posterPath={movie.poster_path}
                voteAvg={movie.vote_average}
                voteCount={movie.vote_count}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
