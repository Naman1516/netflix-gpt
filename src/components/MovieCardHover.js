import React from "react";
import VoteIcon from "./Icons/VoteIcon";
import { useDispatch, useSelector } from "react-redux";
import { setMovieDetails, toggleModal } from "../utils/store/moreInfoModal";
import useGetMoreInfoTrailer from "../utils/custom-hooks/useGetMoreInfoTrailer";
import { useOpenYouTubeVideo } from "../utils/custom-hooks/useOpenYoutubeVideo";
import CardHoverPlayButton from "./Buttons/CardHoverPlayButton";
import CardHoverAddToListButton from "./Buttons/CardHoverAddToListButton";
import OpenMoreInfoModalButton from "./Buttons/OpenMoreInfoModalButton";

const MovieCardHover = ({ id, alt, voteAvg, voteCount }) => {
  useGetMoreInfoTrailer(id);
  const moreInfoModal = useSelector((store) => store.moreInfoModal);
  const { playVideo } = useOpenYouTubeVideo(moreInfoModal.trailer?.key);

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
            <CardHoverPlayButton playVideo={playVideo} />
            <CardHoverAddToListButton />
          </span>
          <span>
            <OpenMoreInfoModalButton openMoreInfoModal={openMoreInfoModal} />
          </span>
        </div>
      </div>
    </>
  );
};

export default MovieCardHover;
