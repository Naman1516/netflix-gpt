import React from "react";
import { language } from "../utils/constants/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const curLang = useSelector((store) => store.config.language);
  const { search, gptSearchPlaceholder: placeholder } = language[curLang];
  return (
    <div className="pt-[10%] flex items-center justify-center">
      <form className="w-2/3 flex justify-center items-center">
        <input
          type="text"
          placeholder={placeholder}
          className="p-4 m-4 w-2/3 rounded"
        />
        <button className="py-4 w-28 bg-red-500 text-white rounded">
          {search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
