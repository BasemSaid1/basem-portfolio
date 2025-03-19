import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-black z-50 fixed top-0 left-0 right-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link className="text-white flex flex-col items-center" to="/">
            <div className="flex flex-col items-center">
              <div>
                <i className="fa-solid fa-less-than pr-2"></i>
                <i className="fa-solid fa-greater-than"></i>
              </div>
              <div className="pl-2 mt-1">
                <i className="fa-solid fa-b"></i>
                <i className="fa-solid fa-s"></i>
              </div>
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-white md:hidden focus:outline-none"
          >
            <i
              className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`}
            ></i>
          </button>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
              <li>
                <NavLink
                  to="/"
                  className="py-2 px-3 text-white inline-block"
                  onClick={closeMenu}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="py-2 px-3 text-white inline-block"
                  onClick={closeMenu}
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="py-2 px-3 text-white inline-block"
                  onClick={closeMenu}
                >
                  PROJECTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="py-2 px-3 text-white inline-block"
                  onClick={closeMenu}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
