import React from "react";
import PlusIcon from "../Icons/PlusIcon";

const MoreInfoAddToListButton = () => {
  return (
    <button className="rounded-full bg-[#141414] bg-opacity-60 p-2 border-2 border-[#141414] border-opacity-20">
      <PlusIcon height={20} width={20} />
    </button>
  );
};

export default MoreInfoAddToListButton;
