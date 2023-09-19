import React, { useState, useRef } from "react";
import CaretSignIcon from "./Icons/CaretSignIcon";
import { useSelector } from "react-redux";
import { USER_ICON } from "../utils/constants/constants";
import MenuIcon from "./Icons/MenuIcon";

const Dropdown = ({ handleSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsOpen(true);
  };

  const handleDropdownMouseLeave = (event) => {
    const isMouseOverButtonOrList =
      dropdownRef.current &&
      (dropdownRef.current.contains(event.relatedTarget) ||
        event.relatedTarget === null);

    if (!isMouseOverButtonOrList) {
      closeDropdown();
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="relative inline-flex my-auto"
      onMouseEnter={handleDropdownMouseEnter}
      onMouseLeave={handleDropdownMouseLeave}
    >
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center gap-2"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <img
          src={user.photoURL || USER_ICON}
          alt="User Icon"
          className="rounded"
        />
        <CaretSignIcon height={18} width={18} isOpen={isOpen} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 w-56 bg-black opacity-80 border border-neutral-500 text-white text-sm">
          <div className="absolute -top-4 right-0 -translate-x-8">
            <CaretSignIcon height={20} width={20} isOpen={true} />
          </div>
          <ul>
            <li className="px-4 py-3 inline-flex gap-4 justify-start items-center">
              <MenuIcon height={20} width={20} />
              <span>Help Center</span>
            </li>
            <li className="border-t text-center">
              <button
                onClick={handleSignOut}
                className="py-3 px-4 w-full hover:underline hover:font-semibold"
              >
                Sign out of Netflix
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
