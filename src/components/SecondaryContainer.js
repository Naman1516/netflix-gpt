import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black px-12">
      <div className="-mt-56 z-20 relative">
        <MovieList
          title={"Now Playing Movie"}
          movies={movies.nowPlayingMovies}
        />
      </div>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
