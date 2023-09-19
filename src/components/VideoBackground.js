import React from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../utils/custom-hooks/useGetMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerInfo = useSelector((store) => store.movies.trailer);
  useGetMovieTrailer(movieId);

  return (
    <div className="relative w-screen lg:h-screen z-10">
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
      <iframe
        className="w-screen lg:h-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerInfo?.key +
          "?&autoplay=1&mute=1&controls=0&rel=0&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
