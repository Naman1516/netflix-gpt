import React from "react";

const ModalBackgroundVideo = ({ src }) => {
  return (
    <iframe
      className="w-full aspect-video rounded-lg"
      src={src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default ModalBackgroundVideo;
