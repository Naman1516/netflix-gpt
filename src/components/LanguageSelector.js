import React from "react";
import { languageOptions } from "../utils/constants/languageConstants";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../utils/store/configSlice";

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div>
      <select className="h-full px-4 py-1 rounded" onChange={handleLanguageChange}>
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
