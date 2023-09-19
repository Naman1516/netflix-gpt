import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo, toggleShowDesc } from "../store/moviesSlice";
import { API_OPTIONS } from "../constants/constants";

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const endpoint = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
      const response = await fetch(endpoint, API_OPTIONS);
      const json = await response.json();
      const trailers = json.results.filter((video) => {
        return video.type === "Trailer";
      });

      // random trailer if trailers else any video
      const trailer = trailers.length
        ? trailers[Math.floor(Math.random() * trailers.length)]
        : json.results[0];
      dispatch(addTrailerVideo(trailer));
      dispatch(toggleShowDesc(true));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useGetMovieTrailer;
