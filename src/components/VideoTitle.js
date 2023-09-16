import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 md:mt-0">
        {title}
      </h2>
      <p className="hidden lg:block py-6 text-lg w-1/2">{overview}</p>
      <div className="mt-6 lg:mt-0">
        <button className="bg-white text-black p-1 md:p-3 lg:p-4 px-3 md:px-7 lg:px-10 md:text-lg rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="ml-2 bg-gray-500 text-white p-1 md:p-3 lg:p-4 px-3 md:px-7 lg:px-10 md:text-lg bg-opacity-50 rounded-lg">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
