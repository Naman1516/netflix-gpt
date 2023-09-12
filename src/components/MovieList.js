import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h2 className="text-3xl text-white font-semibold py-4 px-2">{title}</h2>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2 p-2">
          {movies?.map((movie) => (
            <MovieCard alt={movie.title} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
