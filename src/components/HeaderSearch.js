import React, { useState, useEffect, useRef } from "react";
import IconSearch from "./Icons/SearchIcon";

const SearchInput = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !inputRef.current.value &&
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

  const [timeout, setTimeoutId] = useState(null);

  const debounce = (fn, delay) => {
    return (...args) => {
      clearTimeout(timeout);
      const id = setTimeout(() => {
        fn(...args);
      }, delay);
      setTimeoutId(id);
    };
  };

  const showInput = () => {
    setInputVisible(true);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const searchIconHeightandWidth = isInputVisible ? 20 : 30;

  return (
    <div
      ref={searchContainerRef}
      className="relative flex justify-center items-center"
    >
      <button
        onClick={showInput}
        disabled={isInputVisible}
        className={`${
          isInputVisible ? "translate-x-7" : ""
        } transition-all ease-linear delay-200`}
      >
        <IconSearch
          height={searchIconHeightandWidth}
          width={searchIconHeightandWidth}
          className={`transition-all ease-linear delay-200`}
        />
      </button>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={inputRef}
          type="text"
          className={`${
            isInputVisible ? "w-52 pl-9" : "w-0"
          } h-9 rounded transition-all ease-linear delay-200 bg-neutral-600 bg-opacity-80 text-white`}
          onInput={(e) => debounce(() => alert(e.target.value), 500)()}
        />
      </form>
    </div>
  );
};

export default SearchInput;
