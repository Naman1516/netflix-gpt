import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addTrendingMovies } from "../store/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    try {
      const endpoint =
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
      const response = await fetch(endpoint, API_OPTIONS);

      const data = await response.json();
      dispatch(addTrendingMovies(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTrendingMovies;
