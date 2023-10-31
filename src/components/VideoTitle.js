import React, { useEffect, useCallback } from "react";
import PlayIcon from "./Icons/PlayIcon";
import MoreInfoIcon from "./Icons/MoreInfoIcon";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowDesc } from "../utils/store/moviesSlice";
import { useOpenYouTubeVideo } from "../utils/custom-hooks/useOpenYoutubeVideo";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailer);
  const showDescription = useSelector((store) => store.movies.showDesc);
  const { openVideo } = useOpenYouTubeVideo(trailer?.key);

  const hideDesc = useCallback(() => {
    setTimeout(() => {
      dispatch(toggleShowDesc(false));
    }, 5000);
  }, [dispatch]);

  const showDesc = useCallback(() => {
    setTimeout(() => {
      dispatch(toggleShowDesc(true));
    }, 35000);
  }, [dispatch]);

  useEffect(() => {
    hideDesc();
    showDesc();
  }, [hideDesc, showDesc]);

  return (
    <div className="w-full pt-[15%] md:pt-[20%] px-12 md:px-24 absolute text-white z-20">
      <h2
        className={`text-xl font-bold my-2 md:my-4 md:max-w-prose transition-all duration-500 ease-in-out ${
          showDescription
            ? "md:text-5xl lg:text-6xl"
            : "text-xl md:text-3xl lg:text-4xl"
        }`}
      >
        {title}
      </h2>
      <p
        className={`my-4 text-md max-w-prose transition-all duration-500 ease-in-out ${
          showDescription ? "hidden lg:block" : "hidden"
        }`}
      >
        {overview.length > 220 ? overview.split(". ")[0] + "." : overview}
      </p>
      <div className="mt-6 lg:mt-0 flex">
        <button
          className="bg-white text-sm md:text-lg bg-opacity-95 hover:bg-opacity-60 rounded-md p-2 flex items-center space-x-1 text-black font-semibold pl-3 pr-4"
          onClick={openVideo}
        >
          <PlayIcon height={30} width={30} />
          <span className="pr-2">Play</span>
        </button>
        <button
          className="ml-2 bg-gray-500 text-sm md:text-lg bg-opacity-50 hover:bg-opacity-30 rounded-md p-2 flex items-center space-x-1 pl-3 pr-4 text-white font-semibold"
          onClick={openVideo}
        >
          <MoreInfoIcon height={30} width={30} />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
