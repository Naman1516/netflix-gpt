import React from "react";
import { APP_LOGO } from "../utils/constants/constants";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <img
      className="w-28 md:w-36 cursor-pointer"
      src={APP_LOGO}
      alt="Netflix Logo"
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;
