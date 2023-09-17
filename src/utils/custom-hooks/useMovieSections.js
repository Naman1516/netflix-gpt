import usePopularMovies from "./usePopularMovies";
import useTrendingMovies from "./useTrendingMovies";
import useTopRatedMovies from "./useTopRatedMovies";
import useNowPlayingMovies from "./useNowPlayingMovies";
import useGetMovieGenre from "./useGetMovieGenre";

const useMovieSections = () => {
  useGetMovieGenre();
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTopRatedMovies();
};

export default useMovieSections;
