import React from "react";

const ModalBackgroundVideo = ({ videoKey }) => {
  return (
    <iframe
      className="w-full aspect-video rounded-lg"
      src={`https://www.youtube.com/embed/${videoKey}?&autoplay=1&mute=1&controls=0&rel=0&loop=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default ModalBackgroundVideo;
