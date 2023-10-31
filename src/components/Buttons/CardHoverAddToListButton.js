import React from "react";
import PlusIcon from "../Icons/PlusIcon";

const CardHoverAddToListButton = () => {
  return (
    <button
      className="hover:opacity-90 ml-4 border-2 rounded-full"
      title="Add to List"
    >
      <PlusIcon height={30} width={30} className="p-2" />
    </button>
  );
};

export default CardHoverAddToListButton;
