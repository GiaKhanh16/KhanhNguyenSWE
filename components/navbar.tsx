import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-b from-gray-900 to-gray-800 p-4">
      <ul className="flex flex-col space-y-4 text-center">
        <li className="text-white hover:text-gray-300 cursor-pointer">ABOUT</li>
        <li className="text-gray-400 hover:text-gray-300 cursor-pointer">
          Writing
        </li>
        <li className="text-gray-400 hover:text-gray-300 cursor-pointer">
          Project
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
