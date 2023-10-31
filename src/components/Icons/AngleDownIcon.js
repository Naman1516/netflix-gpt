import React from "react";

const AngleDownIcon = ({ height, width, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    width={width}
    className={className}
  >
    <path
      fill="#fff"
      d="M12 17l-6.293-6.293a1 1 0 011.414-1.414L12 14.586l4.879-4.879a1 1 0 111.414 1.414L12 17z"
    />
  </svg>
);

export default AngleDownIcon;
