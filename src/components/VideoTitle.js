import React from "react";
import PlayIcon from "./Icons/PlayIcon";
import MoreInfoIcon from "./Icons/MoreInfoIcon";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview }) => {
  const trailer = useSelector((store) => store.movies.trailer);

  return (
    <div className="w-screen aspect-video pt-[20%] px-12 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 md:mt-0">
        {title}
      </h2>
      <p className="hidden lg:block py-6 text-lg w-1/2">{overview}</p>
      <div className="mt-6 lg:mt-0 flex">
        <a
          className="bg-white block text-black p-1 md:p-3 lg:p-4 px-3 md:px-7 lg:px-10 md:text-lg rounded hover:bg-opacity-80"
          href={`https://www.youtube.com/watch?v=${trailer?.key}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center">
            <PlayIcon height={30} width={30} />
            <span>Play</span>
          </span>
        </a>
        <Link
          className="block ml-2 bg-gray-500 text-white p-1 md:p-3 lg:p-4 px-3 md:px-7 lg:px-10 md:text-lg bg-opacity-50 hover:bg-opacity-30 rounded"
          to="/"
        >
          <span className="flex items-center">
            <MoreInfoIcon height={30} width={30} />
            <span>More Info</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
