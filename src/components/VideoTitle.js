import React, { useEffect, useCallback } from "react";
import PlayIcon from "./Icons/PlayIcon";
import MoreInfoIcon from "./Icons/MoreInfoIcon";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowDesc } from "../utils/store/moviesSlice";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailer);
  const showDescription = useSelector((store) => store.movies.showDesc);

  const hideDesc = useCallback(() => {
    setTimeout(() => {
      dispatch(toggleShowDesc(false));
    }, 5000);
  }, [dispatch]);

  const showDesc = useCallback(() => {
    setTimeout(() => {
      dispatch(toggleShowDesc(true));
    }, 20000);
  }, [dispatch]);

  useEffect(() => {
    hideDesc();
    showDesc();
  }, [hideDesc, showDesc]);

  const openYouTubeVideo = useCallback(() => {
    const videoKey = trailer?.key;
    if (videoKey) {
      const youtubeUrl = `https://www.youtube.com/watch?v=${videoKey}`;
      window.open(youtubeUrl, "_blank", "noopener,noreferrer");
    }
  }, [trailer?.key]);

  return (
    <div className="w-screen aspect-video pt-[20%] px-12 md:px-24 absolute text-white z-20">
      <h2
        className={`text-xl font-bold mt-4 md:mt-0 md:max-w-prose transition-all duration-500 ease-in-out ${
          showDescription
            ? "md:text-5xl lg:text-6xl"
            : "text-xl md:text-3xl lg:text-4xl"
        }`}
      >
        {title}
      </h2>
      <p
        className={`py-6 text-md max-w-prose transition-all duration-500 ease-in-out ${
          showDescription ? "hidden lg:block" : "hidden"
        }`}
      >
        {overview}
      </p>
      <div className="mt-6 lg:mt-0 flex">
        <button
          className="bg-white md:text-lg bg-opacity-80 hover:bg-opacity-60 rounded-md p-2 flex items-center space-x-1 text-black font-semibold pl-3 pr-4 text-lg"
          onClick={openYouTubeVideo}
        >
          <PlayIcon height={30} width={30} />
          <span className="pr-2">Play</span>
        </button>
        <button
          className="ml-2 bg-gray-500 md:text-lg bg-opacity-50 hover:bg-opacity-30 rounded-md p-2 flex items-center space-x-1 pl-3 pr-4 text-white font-semibold text-lg"
          onClick={openYouTubeVideo}
        >
          <MoreInfoIcon height={30} width={30} />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
