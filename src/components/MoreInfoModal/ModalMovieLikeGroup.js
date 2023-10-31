import React from "react";
import ThumbsUpIcon from "../Icons/ThumbsUpIcon";

const ModalMovieLikeGroup = () => {
  // State to track whether the component is visible
  return (
    <span className="group relative flex items-center justify-center">
      <button className="rounded-full bg-[#141414] bg-opacity-60 p-2 border-2 border-[#141414] border-opacity-20">
        <ThumbsUpIcon height={20} width={20} />
      </button>
      <div className="opacity-0 hidden group-hover:opacity-100 group-hover:flex absolute bg-[#141414] rounded-3xl py-2 px-3 animate-pulse-once">
        <button className="rounded-full bg-[#141414] bg-opacity-60 p-2 hover:bg-neutral-700">
          <ThumbsUpIcon height={20} width={20} />
        </button>
        <button className="ml-3 rounded-full bg-[#141414] bg-opacity-60 p-2 hover:bg-neutral-700">
          <ThumbsUpIcon height={20} width={20} />
        </button>
        <button className="ml-3 rounded-full bg-[#141414] bg-opacity-60 p-2 hover:bg-neutral-700">
          <ThumbsUpIcon height={20} width={20} />
        </button>
      </div>
    </span>
  );
};

export default ModalMovieLikeGroup;
