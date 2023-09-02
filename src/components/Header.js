import React from "react";
import { APP_LOGO, USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={APP_LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex gap-6">
          <img
            className="w-12 h-12"
            src={user?.photoURL || USER_ICON}
            alt="user icon"
          />
          <button
            className="text-white border border-red-500 rounded px-4 py-1 hover:bg-red-500"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
