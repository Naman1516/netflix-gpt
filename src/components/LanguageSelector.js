import React from "react";
import { languageOptions } from "../utils/constants/languageConstants";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../utils/store/configSlice";
import { toggleSideMenu } from "../utils/store/headerSlice";

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(toggleSideMenu());
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div>
      <select
        className="h-full w-52 md:w-36 px-4 py-1 rounded"
        onChange={handleLanguageChange}
      >
        {languageOptions.map((el) => (
          <option key={el.value} value={el.value}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
