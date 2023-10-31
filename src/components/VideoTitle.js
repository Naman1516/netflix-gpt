import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowDesc } from "../utils/store/moviesSlice";
import { useOpenYouTubeVideo } from "../utils/custom-hooks/useOpenYoutubeVideo";
import PlayButton from "./Buttons/PlayButton";
import MoreInfoButton from "./Buttons/MoreInfoButton";

const VideoTitle = ({ title, overview }) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailer);
  const showDescription = useSelector((store) => store.movies.showDesc);
  const { playVideo } = useOpenYouTubeVideo(trailer?.key);

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
        <PlayButton playVideo={playVideo} />
        <MoreInfoButton playVideo={playVideo} />
      </div>
    </div>
  );
};

export default VideoTitle;
