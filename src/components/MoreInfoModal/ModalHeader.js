import React from "react";
import PlayButton from "../Buttons/PlayButton";
import MoreInfoAddToListButton from "../Buttons/MoreInfoAddToListButton";
import ModalMovieLikeGroup from "./ModalMovieLikeGroup";

const ModalHeader = ({ movieTitle, playVideo }) => {
  return (
    <>
      <span className="text-2xl font-semibold">{movieTitle}</span>
      <span className="flex items-center gap-4 mt-2">
        <PlayButton playVideo={playVideo} />
        <MoreInfoAddToListButton />
        <ModalMovieLikeGroup />
      </span>
    </>
  );
};

export default ModalHeader;
