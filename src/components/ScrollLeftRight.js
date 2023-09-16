import React from "react";

const ScrollLeftRight = ({ targetElement }) => {
  const scrollHandler = (direction) => {
    if (!targetElement) return;

    if (direction === "left") {
      targetElement.scrollLeft -= 900;
    } else if (direction === "right") {
      targetElement.scrollLeft += 900;
    }
  };

  const scrollLeft = () => {
    scrollHandler("left");
  };

  const scrollRight = () => {
    scrollHandler("right");
  };

  return (
    <div>
      <button
        className="text-white absolute top-[57%] left-0 z-40 text-6xl"
        onClick={scrollLeft}
      >
        ⬅
      </button>
      <button
        className="text-white absolute top-[57%] right-4 z-40 text-6xl"
        onClick={scrollRight}
      >
        ➡️
      </button>
    </div>
  );
};

export default ScrollLeftRight;
