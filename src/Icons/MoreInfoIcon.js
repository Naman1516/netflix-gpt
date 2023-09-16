import React from "react";

const MoreInfoIcon = ({ height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 50"
      x="0px"
      y="0px"
      height={height}
      width={width}
    >
      <title>More info</title>
      <g>
        <path
          d="M25,5A20,20,0,1,0,45,25,20,20,0,0,0,25,5Zm0,38A18,18,0,1,1,43,25,18,18,0,0,1,25,43Z"
          fill="#fff"
        />
        <rect x="24" y="21" width="2" height="16" fill="#fff" />
        <rect x="23" y="13" width="4" height="4" fill="#fff" />
      </g>
    </svg>
  );
};

export default MoreInfoIcon;
