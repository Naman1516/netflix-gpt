import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black pl-6 md:px-12">
      <div className="md:-mt-32 lg:-mt-56 z-20 relative">
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
