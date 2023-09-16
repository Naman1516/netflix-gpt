import React, { useEffect } from "react";
import { APP_LOGO, USER_ICON } from "../utils/constants/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { toggleGptSearchView } from "../utils/store/gptSlice";
import LanguageSelector from "./LanguageSelector";
import { toggleSideMenu } from "../utils/store/headerSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const isSideMenuOpen = useSelector((store) => store.header.isOpen);

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

  const toggleGpt = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleMenu = () => {
    dispatch(toggleSideMenu());
  };

  return (
    <div>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <img className="w-44" src={APP_LOGO} alt="Netflix Logo" />
        {user && (
          <div>
            {/* large screen */}
            <div className="hidden lg:block">
              <div className="flex gap-6">
                {showGptSearch && <LanguageSelector />}
                <button
                  className="text-white border w-36 border-red-500 rounded px-4 py-1 hover:bg-red-500"
                  onClick={toggleGpt}
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
            </div>

            {/* small screen */}
            <div className="block lg:hidden">
              <button className="bg-white" onClick={toggleMenu}>
                {isSideMenuOpen ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <div
          className={`absolute bg-black top-32 right-0 z-50 transform transition-transform ease-in-out duration-3000 ${
            isSideMenuOpen ? "translate-x-0" : "translate-x-[2000px]"
          } `}
        >
          <div className="flex flex-col items-center gap-6 w-screen h-screen">
            <img
              className="w-12 h-12 rounded"
              src={user?.photoURL || USER_ICON}
              alt="user icon"
            />
            {showGptSearch && <LanguageSelector />}
            <button
              className="text-white border border-red-500 rounded px-4 py-1 hover:bg-red-500 w-full"
              onClick={toggleGpt}
            >
              {showGptSearch ? "Homepage" : "GPT"}
            </button>
            <button
              className="text-white border border-red-500 rounded px-4 py-1 hover:bg-red-500 w-full"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
