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
    <nav className="bg-black fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto w-[90%] flex justify-between items-center py-4">
        <Link className="text-white flex flex-col items-center" to="/">
          Basem Said
        </Link>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        <div className="hidden lg:flex lg:items-center">
          <ul className="flex space-x-6 text-white">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `hover:text-gray-300 transition ${
                    isActive ? "text-gray-300  border-b-2" : ""
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `hover:text-gray-300 transition ${
                    isActive ? "text-gray-300 border-b-2" : ""
                  }`
                }
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `hover:text-gray-300 transition ${
                    isActive ? "text-gray-300 border-b-2" : ""
                  }`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <button
          className="absolute top-4 left-4 text-white focus:outline-none"
          onClick={closeMenu}
          aria-label="Close Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col space-y-6 p-4 pt-16 text-right">
          <li>
            <NavLink
              className={({ isActive }) =>
                `block hover:text-gray-300 transition ${
                  isActive ? "text-gray-300" : ""
                }`
              }
              to="/"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `block hover:text-gray-300 transition ${
                  isActive ? "text-gray-300" : ""
                }`
              }
              to="/projects"
              onClick={closeMenu}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `block hover:text-gray-300 transition ${
                  isActive ? "text-gray-300" : ""
                }`
              }
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}
