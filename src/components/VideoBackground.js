import React from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../utils/custom-hooks/useGetMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerInfo = useSelector((store) => store.movies.trailer);
  useGetMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerInfo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        autoplay
      ></iframe>
    </div>
  );
};

export default VideoBackground;
