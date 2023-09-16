import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { addPouplarMovies } from "../store/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(store => store.movies.popularMovies);

  const getPopularMovies = async () => {
    try {
      const endpoint = "https://api.themoviedb.org/3/movie/popular?page=1";
      const response = await fetch(endpoint, API_OPTIONS);

      const data = await response.json();
      dispatch(addPouplarMovies(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
