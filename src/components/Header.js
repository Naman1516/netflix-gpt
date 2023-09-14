import React, { useEffect } from "react";
import { APP_LOGO, USER_ICON } from "../utils/constants/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { toggleGptSearchView } from "../utils/store/gptSlice";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    //good practice
    //on call, will remove onAuthStateChanged event listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //signin/up
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        //signout
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={APP_LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex gap-6">
          {showGptSearch && <LanguageSelector />}
          <button
            className="text-white border w-36 border-red-500 rounded px-4 py-1 hover:bg-red-500"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT"}
          </button>
          <img
            className="w-12 h-12 rounded"
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
