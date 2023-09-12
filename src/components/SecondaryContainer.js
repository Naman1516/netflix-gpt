import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useMovieSections from "../utils/custom-hooks/useMovieSections";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  useMovieSections();

  return (
    <div className="bg-black px-12">
      <div className="-mt-56 z-20 relative">
        <MovieList
          title={"Now Playing Movie"}
          movies={movies.nowPlayingMovies}
        />
      </div>
      <MovieList title={"Trending"} movies={movies.trendingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
    </div>
  );
};

export default SecondaryContainer;
