import React from "react";
import style from "./projects.module.css";

import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <section className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
        <div className="py-20 md:py-36 px-4 md:px-0">
          <h1 className="text-white text-center text-4xl md:text-6xl font-extrabold mb-16 tracking-tight animate-pulse">
            Explore My Epic Projects
          </h1>
          <div className="flex flex-wrap justify-center gap-8 md:w-[90%] w-[95%] mx-auto">
            {/* Project 1: FreshCart App */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://fresh-cart-ewou0tuim-basem-saids-projects.vercel.app"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project1.png"
                      alt="FreshCart"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  FreshCart App
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://fresh-cart-ewou0tuim-basem-saids-projects.vercel.app"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/FreshCart-App/tree/main"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 2: Restaurant */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://restaurant-ashen-five.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project2.png"
                      alt="restaurant"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Restaurant
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://restaurant-ashen-five.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/restaurant"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 3: My Movies */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://my-movies-nu-teal.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project3.png"
                      alt="My Movies"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  My Movies
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://my-movies-nu-teal.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/My_Movies"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 4: Recipe */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://recipe-food-amber.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project4.png"
                      alt="Recipe App"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Recipe
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://recipe-food-amber.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Recipe-food"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 5: Quran App */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://quran-app2-peach.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project5.png"
                      alt="Quran App"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Quran App
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://quran-app2-peach.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Quran-App2"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 6: Educational-platform */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link to="https://adsamy2.vercel.app/" target="_blank">
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project6.png"
                      alt="Educational-platform"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Educational-platform
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://adsamy2.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link to="#" className="w-1/2">
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 7: Rashid Yachts */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://rashid-yachts-sooty.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project7.png"
                      alt="Rashid Yachts"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Rashid Yachts
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://rashid-yachts-sooty.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link to="#" className="w-1/2">
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 8: furniture-showroom */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://furniture-showroom-silk.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project8.png"
                      alt="furniture-showroom"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  furniture-showroom
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://furniture-showroom-silk.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link to="#" className="w-1/2">
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 9: beauty-clinic */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://beauty-clinic-gilt.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project9.png"
                      alt="beauty-clinic"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  beauty-clinic
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://beauty-clinic-gilt.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link to="#" className="w-1/2">
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 10: cafe */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link to="https://caffee-swart.vercel.app/" target="_blank">
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project10.png"
                      alt="cafe"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  cafe
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://caffee-swart.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link to="#" className="w-1/2">
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 11: GlobalNews */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://news-app-nine-pi.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project11.jpg"
                      alt="GlobalNews"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  GlobalNews
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://news-app-nine-pi.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/News-App"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 12: La-collection */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://la-collection-e-commerce-ruby.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project12.png"
                      alt="La-collection"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  La-collection
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://la-collection-e-commerce-ruby.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/La-collection-E-commerce"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 13: Dashboard */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1700"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://dashboard-two-woad-66.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project13.png"
                      alt="Dashboard"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Dashboard
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://dashboard-two-woad-66.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/dashboard"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 14: Quiz App */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1800"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://quiz-app-eta-ten-63.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project14.png"
                      alt="Quiz App"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Quiz App
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://quiz-app-eta-ten-63.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Quiz-App"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 15: Weather App */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/weather-app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project15.png"
                      alt="Weather App"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Weather App
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/weather-app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/weather-app"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 16: Login App */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Login-JS-LocalStorage/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project16.png"
                      alt="Login App"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Login App
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/Login-JS-LocalStorage/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Login-JS-LocalStorage"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 17: Todo List */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Todo-list/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project17.png"
                      alt="Todo List"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Todo List
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/Todo-list/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Todo-list"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 18: BookMark */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1300"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/BookMark/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project18.png"
                      alt="BookMark"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  BookMark
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/BookMark/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/BookMark"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 19: Calculator App */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Calculator-app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project19.png"
                      alt="Calculator-app"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Calculator App
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/Calculator-app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Calculator-app"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* project 20: Currency Converter */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1900"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Currency-Converter/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project20.png"
                      alt="Currency Converter"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Currency Converter
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/Currency-Converter/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Currency-Converter"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 21: Daniels-Template */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Daniels-Template/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project21.png"
                      alt="Daniels-Template"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Daniels-Template
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/Daniels-Template/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Daniels-Template.git"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 22: Random Quote Generator */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1400"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Random-Quote-Generator/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project22.png"
                      alt="Random-Quote-Generator"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Random Quote Generator
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/Random-Quote-Generator/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Random-Quote-Generator"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 23: Slider JS */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1500"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/slider-js/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project23.png"
                      alt="slider-js"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Slider JS
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/slider-js/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/slider-js"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 24: First Framework */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1600"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://first-framework-mu.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project24.png"
                      alt="First-framework"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  First Framework
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://first-framework-mu.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/first-framework"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 25: Rock Paper Scissors */}
            <div
              className="w-full md:w-1/3 lg:w-1/4 text-center group relative"
              data-aos="fade-up"
              data-aos-delay="1900"
            >
              <div className="relative bg-gray-800 border-2 border-gray-600 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)] p-6">
                <div>
                  <Link
                    to="https://rock-paper-scissors-tan-six.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      src="/images/project25.png"
                      alt="Rock Paper Scissors"
                    />
                  </Link>
                </div>
                <h2 className="mt-4 text-white text-2xl font-bold tracking-wide">
                  Rock Paper Scissors
                </h2>
                <div className="mt-6 flex space-x-4">
                  <Link
                    to="https://rock-paper-scissors-tan-six.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">DEMO</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Rock-Paper-Scissors"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="relative bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 w-full rounded-lg transition-all duration-300 transform hover:scale-110 overflow-hidden group/button">
                      <span className="relative z-10">CODE</span>
                      <span className="absolute inset-0 bg-emerald-500 opacity-0 group-hover/button:opacity-30 transition-opacity duration-300"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
