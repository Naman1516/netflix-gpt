import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addPouplarMovies } from "../store/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const endpoint = "https://api.themoviedb.org/3/movie/popular?page=1";
      const response = await fetch(endpoint, API_OPTIONS);

      const data = await response.json();
      console.log("Popular: ", data.results);
      dispatch(addPouplarMovies(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
