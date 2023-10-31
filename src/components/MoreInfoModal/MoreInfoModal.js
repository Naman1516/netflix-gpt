import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetModal, toggleModal } from "../../utils/store/moreInfoModal";
import { useOpenYouTubeVideo } from "../../utils/custom-hooks/useOpenYoutubeVideo";
import ModalBackgroundVideo from "./ModalBackgroundVideo";
import ModalHeader from "./ModalHeader";
import ModalCloseButton from "../Buttons/ModalCloseButton";
import ModalMatchPercentage from "./ModalMatchPercentage";

const MoreInfoModal = () => {
  const dispatch = useDispatch();
  const moreInfoModal = useSelector((store) => store.moreInfoModal);
  const { key } = moreInfoModal.trailer;
  const { playVideo } = useOpenYouTubeVideo(key);
  const { movieTitle, voteAvg, voteCount } = moreInfoModal.info;

  const closeModal = () => {
    dispatch(toggleModal());
    dispatch(resetModal());
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      {/* overlay below modal */}
      <div className="fixed w-full h-full bg-black opacity-50 z-40 top-1/2 -translate-y-1/2"></div>
      {/* modal content */}
      <div className="z-40 text-gray-500 top-1/2 -translate-y-1/2 flex justify-center flex-col items-center w-full h-full fixed overflow-y-auto">
        <div className="w-8/12 z-50 absolute top-16 rounded-lg bg-[#141414]">
          <div className="relative">
            <ModalCloseButton closeModal={closeModal} />
            {/* blur overlay from bottom to top */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
            <ModalBackgroundVideo videoKey={key} />
            <div className="text-white p-14 absolute top-1/2 flex flex-col">
              <ModalHeader movieTitle={movieTitle} playVideo={playVideo} />
            </div>
          </div>
          <div className="text-white px-10 py-5 flex justify-between">
            <ModalMatchPercentage voteAvg={voteAvg} voteCount={voteCount} />
            <span>{voteAvg}</span>
            <span>{voteCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoModal;
