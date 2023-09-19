import React, { useState, useEffect, useRef } from "react";
import IconSearch from "./Icons/SearchIcon";

const SearchInput = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setInputVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const showInput = () => {
    setInputVisible(true);
  };

  const searchIconHeightWidth = isInputVisible ? 20 : 30;

  return (
    <div
      ref={searchContainerRef}
      className="relative flex justify-center items-center mr-8"
    >
      <button onClick={showInput}>
        <span className="absolute top-1/2 transform -translate-y-1/2 left-1">
          <IconSearch
            height={searchIconHeightWidth}
            width={searchIconHeightWidth}
            className="transition-all ease-in delay-100"
          />
        </span>
      </button>
      {isInputVisible && (
        <input
          ref={inputRef}
          type="search"
          className="w-52 h-9 rounded transition-all ease-in delay-100 bg-neutral-600 bg-opacity-80 pl-8 text-white"
          autoFocus
        />
      )}
    </div>
  );
};

export default SearchInput;
