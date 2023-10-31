import React from "react";
import VoteIcon from "./Icons/VoteIcon";
import AngleDownIcon from "./Icons/AngleDownIcon";
import PlusIcon from "./Icons/PlusIcon";
import PlayIcon from "./Icons/PlayIcon";
import { useDispatch, useSelector } from "react-redux";
import { setMovieDetails, toggleModal } from "../utils/store/moreInfoModal";
import useGetMovieTrailer from "../utils/custom-hooks/useGetMovieTrailer";

const MovieCardHover = ({ id, alt, voteAvg, voteCount }) => {
  const trailerLink = useGetMovieTrailer(id);
  const openYouTubeVideo = () => {
    // if (trailerLink) {
    //   const youtubeUrl = `https://www.youtube.com/watch?v=${trailerLink}`;
    //   window.open(youtubeUrl, "_blank", "noopener,noreferrer");
    // }
  };

  const moreInfoModal = useSelector((store) => store.moreInfoModal);

  const dispatch = useDispatch();
  const openMoreInfoModal = () => {
    dispatch(toggleModal());
    dispatch(
      setMovieDetails({
        movieTitle: alt,
        voteAvg,
        voteCount,
      })
    );
  };

  return (
    <>
      <div className="hidden group-hover:block absolute inset-0 bg-black opacity-90 rounded"></div>
      <div className="hidden group-hover:block text-white bottom-10 px-4 absolute z-10 rounded w-full">
        <h3 className="text-md md:text-lg font-bold ">{alt}</h3>
        <div className="flex items-center text-sm mt-2">
          <VoteIcon height={13} width={13} />
          <span className="ml-1">
            {parseFloat(voteAvg).toFixed(1)} &nbsp; | &nbsp; {voteCount}
          </span>
        </div>
        <div className="flex justify-between items-center mt-5 w-full">
          <span>
            <button
              className="hover:opacity-90 border-2 rounded-full bg-white"
              onClick={openYouTubeVideo}
              title="Play Trailer"
            >
              <PlayIcon height={30} width={30} />
            </button>
            <button
              className="hover:opacity-90 ml-4 border-2 rounded-full"
              title="Add to List"
            >
              <PlusIcon height={30} width={30} className="p-2" />
            </button>
          </span>
          <span>
            <button
              className="hover:opacity-90 border-2 rounded-full"
              onClick={openMoreInfoModal}
            >
              <AngleDownIcon height={30} width={30} className="p-1" />
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default MovieCardHover;
