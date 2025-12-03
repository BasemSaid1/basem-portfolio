import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white text-white text-center py-6">
      <div className="text-3xl flex justify-center gap-6 mb-3">
        <Link
          to="https://www.linkedin.com/in/basem-said-468b7b274"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
        >
          <i className="fa-brands fa-linkedin"></i>
        </Link>
        <Link
          to="https://github.com/BasemSaid1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link
          to="https://wa.me/01095435168"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition duration-300"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </Link>
      </div>
      <p className="text-sm text-gray-300">
        All rights reserved &copy; {new Date().getFullYear()}
        <span className="text-red-500"> Basem Said</span>
      </p>
    </footer>
  );
}
