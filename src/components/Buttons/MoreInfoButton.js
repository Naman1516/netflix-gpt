import React from "react";
import MoreInfoIcon from "../Icons/MoreInfoIcon";

const MoreInfoButton = ({ playVideo }) => {
  return (
    <button
      className="ml-2 bg-gray-500 text-sm md:text-lg bg-opacity-50 hover:bg-opacity-30 rounded-md p-2 flex items-center space-x-1 pl-3 pr-4 text-white font-semibold"
      onClick={playVideo}
    >
      <MoreInfoIcon height={30} width={30} />
      <span>More Info</span>
    </button>
  );
};

export default MoreInfoButton;
