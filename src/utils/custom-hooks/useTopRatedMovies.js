import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../store/moviesSlice";
import { API_OPTIONS } from "../constants/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    try {
      const endpoint = "https://api.themoviedb.org/3/movie/top_rated?page=1";
      const response = await fetch(endpoint, API_OPTIONS);

      const data = await response.json();
      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
