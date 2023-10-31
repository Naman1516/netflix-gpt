import React from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../utils/custom-hooks/useGetMovieTrailer";
import ModalBackgroundVideo from "./MoreInfoModal/ModalBackgroundVideo";

const VideoBackground = ({ movieId }) => {
  const trailerInfo = useSelector((store) => store.movies.trailer);
  useGetMovieTrailer(movieId);

  return (
    <div className="relative w-full lg:h-screen z-10">
      <div className="absolute lg:h-[120vh] inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
      <ModalBackgroundVideo videoKey={trailerInfo?.key} />
    </div>
  );
};

export default VideoBackground;
