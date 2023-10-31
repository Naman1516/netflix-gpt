import React from "react";
import PlayIcon from "../Icons/PlayIcon";

const CardHoverPlayButton = ({playVideo}) => {
  return (
    <button
      className="hover:opacity-90 border-2 rounded-full bg-white"
      onClick={playVideo}
      title="Play Trailer"
    >
      <PlayIcon height={30} width={30} />
    </button>
  );
};

export default CardHoverPlayButton;
