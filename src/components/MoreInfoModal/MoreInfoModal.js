import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetModal, toggleModal } from "../../utils/store/moreInfoModal";
import { useOpenYouTubeVideo } from "../../utils/custom-hooks/useOpenYoutubeVideo";
import ModalBackgroundVideo from "./ModalBackgroundVideo";
import ModalHeader from "./ModalHeader";
import ModalCloseButton from "../Buttons/ModalCloseButton";

const MoreInfoModal = () => {
  document.body.style.overflow = "hidden";

  const dispatch = useDispatch();
  const moreInfoModal = useSelector((store) => store.moreInfoModal);
  const { playVideo } = useOpenYouTubeVideo(moreInfoModal.trailer?.key);

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
      <div className="fixed w-full h-full bg-black opacity-50 z-40 top-1/2 -translate-y-1/2"></div>
      <div className="z-40 text-gray-500 top-1/2 -translate-y-1/2 flex justify-center flex-col items-center w-full h-full fixed overflow-y-auto">
        <div className="w-8/12 z-50 absolute top-16 rounded-lg bg-[#141414]">
          <div className="relative">
            <ModalCloseButton closeModal={closeModal} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
            <ModalBackgroundVideo
              src={`https://www.youtube.com/embed/${moreInfoModal.trailer?.key}?&autoplay=1&mute=1&controls=0&rel=0&loop=1`}
            />
            <div className="text-white p-14 absolute top-1/2 flex flex-col">
              <ModalHeader
                movieTitle={moreInfoModal.info?.movieTitle}
                playVideo={playVideo}
              />
            </div>
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

export default MoreInfoModal;
