import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/moviesSlice";
import { API_OPTIONS } from "../constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    try {
      const endpoint = "https://api.themoviedb.org/3/movie/top_rated?page=1";
      const response = await fetch(endpoint, API_OPTIONS);

      const data = await response.json();
      console.log("Top Rated: ", data.results);
      dispatch(addTopRatedMovies(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
