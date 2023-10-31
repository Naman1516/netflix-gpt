import React from "react";
import PlayIcon from "../Icons/PlayIcon";

const PlayButton = ({ playVideo }) => {
  return (
    <button
      className="bg-white text-sm md:text-lg bg-opacity-95 hover:bg-opacity-60 rounded-md p-2 flex items-center space-x-1 text-black font-semibold pl-3 pr-4"
      onClick={playVideo}
    >
      <PlayIcon height={30} width={30} />
      <span className="pr-2">Play</span>
    </button>
  );
};

export default PlayButton;
