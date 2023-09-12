import usePopularMovies from "./usePopularMovies";
import useTrendingMovies from "./useTrendingMovies";
import useTopRatedMovies from "./useTopRatedMovies";

const useMovieSections = () => {
  usePopularMovies();
  useTrendingMovies();
  useTopRatedMovies();
};

export default useMovieSections;
