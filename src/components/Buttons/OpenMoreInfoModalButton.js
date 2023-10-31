import React from "react";
import AngleDownIcon from "../Icons/AngleDownIcon";

const OpenMoreInfoModalButton = ({ openMoreInfoModal }) => {
  return (
    <button
      className="hover:opacity-90 border-2 rounded-full"
      onClick={openMoreInfoModal}
    >
      <AngleDownIcon height={30} width={30} className="p-1" />
    </button>
  );
};

export default OpenMoreInfoModalButton;
