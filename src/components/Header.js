import React, { useCallback, useEffect, useState } from "react";
import { USER_ICON } from "../utils/constants/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import LanguageSelector from "./LanguageSelector";
import { toggleSideMenu } from "../utils/store/headerSlice";
import CloseIcon from "./Icons/CloseIcon";
import MenuIcon from "./Icons/MenuIcon";
import Logo from "./Logo";
import HeaderMainDropdown from "./HeaderMainDropdown";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isSideMenuOpen = useSelector((store) => store.header.isOpen);

  const user = useSelector((store) => store.user);
  const showLanguageSelector = location.pathname === "/suggest";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        if (location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, location.pathname, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    dispatch(toggleSideMenu());
  }, [dispatch]);

  const handleSignOut = async () => {
    try {
      if (isSideMenuOpen) toggleMenu();
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (isSideMenuOpen) toggleMenu();
  };

  const headerMenuItems = [
    {
      name: "Browse",
      link: "/browse",
    },
    {
      name: "Suggest",
      link: "/suggest",
    },
  ];

  return (
    <div>
      <div
        className={`${
          isScrolled
            ? "fixed top-0 bg-[#141414]"
            : "absolute bg-gradient-to-b from-[#141414]"
        } w-full px-8 py-2 z-30 h-18 flex justify-between items-center transition-transform ease-in-out duration-300`}
      >
        <div className="flex justify-center items-center">
          <Logo />
          <div className="hidden lg:flex ml-10 gap-6">
            {headerMenuItems.map((item) => (
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `${
                    isActive ? "font-semibold" : "hover:underline"
                  } text-white text-sm`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {user && (
          <div className="flex justify-center items-center">
            <div className="hidden lg:block">
              <div className="flex justify-center items-center gap-6">
                {showLanguageSelector && <LanguageSelector />}
                <HeaderSearch />
                <HeaderMainDropdown handleSignOut={handleSignOut} />
              </div>
            </div>
            <button onClick={toggleMenu} className="block lg:hidden p-0 m-0">
              <span className="md:hidden">
                <MenuIcon height={25} width={25} />
              </span>
              <span className="hidden md:block">
                <MenuIcon height={40} width={40} />
              </span>
            </button>
          </div>
        )}
      </div>
      <div
        className={`fixed bg-[#141414] bg-opacity-95 right-0 z-50 transform transition-transform ease-in-out duration-300 ${
          isSideMenuOpen ? "translate-x-0" : "translate-x-[2000px]"
        } `}
      >
        <div className="flex justify-end px-8 py-8">
          <button onClick={toggleMenu}>
            <span className="md:hidden">
              <CloseIcon height={25} width={25} />
            </span>
            <span className="hidden md:block">
              <CloseIcon height={40} width={40} />
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center gap-6 w-screen h-screen px-8 py-8">
          <img
            className="w-12 h-12 rounded"
            src={user?.photoURL || USER_ICON}
            alt="user icon"
          />
          {showLanguageSelector && <LanguageSelector />}
          <NavLink
            to="/browse"
            className={({ isActive }) => (isActive ? "text-red-900" : "")}
          >
            Browse
          </NavLink>
          <NavLink
            className="text-white border border-red-500 rounded px-4 py-1 hover:bg-red-500 w-52"
            to={"/suggest"}
          >
            Suggest
          </NavLink>
          <button
            className="text-white border border-red-500 rounded px-4 py-1 hover:bg-red-500 w-52"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
