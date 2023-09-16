import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pt-4">
      <h2 className="text-2xl md:text-3xl text-white font-semibold py-4 px-2">
        {title}
      </h2>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-2 p-2">
          {movies?.map((movie) => (
            <div>
              <MovieCard
                key={movie.title}
                alt={movie.title}
                poster_path={movie.poster_path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
