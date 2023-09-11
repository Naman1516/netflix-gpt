import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      const endpoint = "https://api.themoviedb.org/3/movie/now_playing?page=1";
      const response = await fetch(endpoint, API_OPTIONS);

      const data = await response.json();
      console.log(data.results);
      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
