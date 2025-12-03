import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              404
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-white text-4xl font-bold mb-4">Page Not Found</h2>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          {/* Home Button */}
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
          >
            <i className="fa-solid fa-house mr-3"></i>
            Go Back Home
          </Link>

          {/* Contact Option */}
          <div className="mt-8 text-gray-400">
            <p>
              Need help?{" "}
              <Link
                to="/contact"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Contact me
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
