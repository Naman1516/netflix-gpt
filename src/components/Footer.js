import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  ["Audio Description1", "Audio Description2", "Audio Description3"],
  ["Audio Description4", "Audio Description5", "Audio Description6"],
  ["Audio Description7", "Audio Description8", "Audio Description9"],
  ["Audio Description10", "Audio Description11", "Audio Description12"],
];

const Footer = () => {
  return (
    <div className="bg-[#141414] text-neutral-500 pt-32 pb-10">
      <div className="container mx-auto flex flex-wrap justify-center text-center">
        {menuItems.map((itemList, index) => (
          <ul key={index} className="w-full md:w-1/2 lg:w-1/4">
            {itemList.map((item, subIndex) => (
              <li
                key={subIndex}
                className="text-sm hover:underline cursor-pointer pt-4"
              >
                <Link to={item.link || ""}>{item}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="flex flex-col gap-3 justify-center items-center lg:items-start pt-4 text-sm lg:mx-48">
        <button className="border border-neutral-500 px-2 py-1">
          Service Code
        </button>
        <span>© 1997-2023 Project, Inc.&lrm;</span>
      </div>
    </div>
  );
};

export default Footer;
