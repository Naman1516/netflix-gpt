import usePopularMovies from "./usePopularMovies";
import useTrendingMovies from "./useTrendingMovies";
import useTopRatedMovies from "./useTopRatedMovies";
import useNowPlayingMovies from "./useNowPlayingMovies";

const useMovieSections = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTopRatedMovies();
};

export default useMovieSections;
