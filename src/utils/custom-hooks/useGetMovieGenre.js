import { useEffect } from "react";
import { addGenre } from "../store/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";

const useGetMovieGenre = () => {
  const dispatch = useDispatch();
  const getMovieGenres = async () => {
    try {
      const endpoint =
        "https://api.themoviedb.org/3/genre/movie/list?language=en";
      const response = await fetch(endpoint, API_OPTIONS);

      const data = await response.json();
      dispatch(addGenre(data.genres));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieGenres();
  }, []);
};

export default useGetMovieGenre;
