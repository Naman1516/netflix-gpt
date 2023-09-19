import React from "react";

const CaretSignIcon = ({ isOpen, height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
      height={height}
      width={width}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
        stroke="none"
      ></path>
    </svg>
  );
};

export default CaretSignIcon;
