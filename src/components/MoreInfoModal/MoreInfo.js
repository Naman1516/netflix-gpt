import React from "react";
import CloseIcon from "../Icons/CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import { resetModal, toggleModal } from "../../utils/store/moreInfoModal";
import PlayIcon from "../Icons/PlayIcon";
import PlusIcon from "../Icons/PlusIcon";
import ThumbsUpIcon from "../Icons/ThumbsUpIcon";
import LikesMovie from "./LikesMovie";
import useGetMovieTrailer from "../../utils/custom-hooks/useGetMovieTrailer";

const MoreInfo = () => {
  document.body.style.overflow = "hidden";

  const dispatch = useDispatch();
  const moreInfoModal = useSelector((store) => store.moreInfoModal);

  const closeModal = () => {
    dispatch(toggleModal());
    dispatch(resetModal());
    document.body.style.overflow = "auto";
  };

  const matchPercentage =
    moreInfoModal.info.voteAvg.toString()[0] +
    moreInfoModal.info.voteCount.toString()[0];

  const matchPercentageColor =
    matchPercentage > 75 ? "text-green-500" : "text-yellow-500";

  return (
    <div>
      <div className="absolute w-full h-full bg-black opacity-50 z-40"></div>
      <div className="z-40 text-gray-500 top-1/2 -translate-y-1/2 flex justify-center flex-col items-center w-full h-full fixed">
        <div className="w-8/12 z-50 absolute top-16 rounded-lg bg-[#141414]">
          <div className="relative">
            <button
              className="bg-[#141414] rounded-full absolute right-4 top-2 p-2 z-40"
              onClick={closeModal}
            >
              <CloseIcon height={20} width={20} />
            </button>
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
            <iframe
              className="w-full aspect-video rounded-lg"
              src={
                "https://www.youtube.com/embed/" +
                moreInfoModal.trailer?.key +
                "?&autoplay=1&mute=1&controls=0&rel=0&loop=1"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="text-white p-14 absolute top-1/2 flex flex-col">
            <span className="text-2xl font-semibold">
              {moreInfoModal.info.movieTitle}
            </span>
            <span className="flex items-center justify-center gap-4 mt-2">
              <button className="pl-4 py-1 pr-6 bg-white text-black rounded">
                <span className="inline-flex items-center justify-center">
                  <PlayIcon height={20} width={20} /> <span>Play</span>
                </span>
              </button>
              <button className="rounded-full bg-[#141414] bg-opacity-60 p-2 border-2 border-[#141414] border-opacity-20">
                <PlusIcon height={20} width={20} />
              </button>
              <LikesMovie />
            </span>
          </div>
          <div className="text-white px-10 py-5 flex justify-between">
            <span className={`font-bold ${matchPercentageColor}`}>
              {matchPercentage}% Match
            </span>
            <span>{moreInfoModal.info.voteAvg}</span>
            <span>{moreInfoModal.info.voteCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
