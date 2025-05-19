import React from "react";
import style from "./projects.module.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project7 from "../../assets/project7.png";
import project8 from "../../assets/project8.png";
import project9 from "../../assets/project9.png";
import project20 from "../../assets/project20.png";
import project11 from "../../assets/project11.png";
import project12 from "../../assets/project12.png";
import project13 from "../../assets/project13.png";
import project14 from "../../assets/project14.jpg";
import project15 from "../../assets/project15.png";
import project16 from "../../assets/project16.png";
import project17 from "../../assets/project17.png";
import project18 from "../../assets/project18.png";
import project19 from "../../assets/project19.png";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <section className="bg-black">
        <div className="mt-7 py-36">
          <h1 className="text-white text-center text-4xl md:text-5xl mb-16">
            Check Out My Projects
          </h1>
          <div className="flex flex-wrap mb-10 md:w-[80%] w-[95%] mx-auto">
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://fresh-cart-ewou0tuim-basem-saids-projects.vercel.app"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project13}
                      alt="FreshCart"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  FreshCart App
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://fresh-cart-ewou0tuim-basem-saids-projects.vercel.app"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/FreshCart-App/tree/main"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://restaurant-ashen-five.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project19}
                      alt="restaurant"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  Restaurant
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://restaurant-ashen-five.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/restaurant"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://news-app-nine-pi.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project14}
                      alt="GlobalNews"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  GlobalNews
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://news-app-nine-pi.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/News-App"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://my-movies-nu-teal.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project18}
                      alt="My Movies"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  My Movies
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://my-movies-nu-teal.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/My_Movies"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://la-collection-e-commerce-ruby.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project11}
                      alt="La-collection"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  La-collection
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://la-collection-e-commerce-ruby.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/La-collection-E-commerce"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://recipe-food-amber.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project12}
                      alt="Recipe App"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  Recipe
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://recipe-food-amber.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Recipe-food"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/weather-app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project1}
                      alt="Weather App"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  weather-app
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/weather-app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/weather-app"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Login-JS-LocalStorage/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project2}
                      alt="Login App"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  Login-app
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/Login-JS-LocalStorage/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Login-JS-LocalStorage"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Todo-list/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project3}
                      alt="Todo List"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  Todo-list
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/Todo-list/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Todo-list"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Calculator-app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project4}
                      alt="Calculator-app"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  Calculator-app
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/Calculator-app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Calculator-app"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://quran-app2-peach.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project20}
                      alt="Quran App"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  Quran App
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://quran-app2-peach.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Quran-App2"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Daniels-Template/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project5}
                      alt="Daniels-Template"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  Daniels-Template
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/Daniels-Template/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Daniels-Template.git"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/BookMark/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project6}
                      alt="BookMark"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  BookMark
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/BookMark/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/BookMark"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Random-Quote-Generator/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project7}
                      alt="Random-Quote-Generator"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  Random-Quote-Generator
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/Random-Quote-Generator/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Random-Quote-Generator"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/slider-js/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project8}
                      alt="slider-js"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  slider-js
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://basemsaid1.github.io/slider-js/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/slider-js"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://first-framework-mu.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project9}
                      alt="First-framework"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  First-framework
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://first-framework-mu.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/first-framework"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://dashboard-two-woad-66.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project15}
                      alt="Dashboard"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  Dashboard
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://dashboard-two-woad-66.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/dashboard"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://quiz-app-eta-ten-63.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project16}
                      alt="Quiz App"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  Quiz App
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://quiz-app-eta-ten-63.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Quiz-App"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 group border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 p-4">
                <div>
                  <Link
                    to="https://rock-paper-scissors-tan-six.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-full h-[250px] object-cover"
                      src={project17}
                      alt="Rock Paper Scissors"
                    />
                  </Link>
                </div>
                <h2 className="mt-3 text-white text-2xl font-semibold">
                  Rock Paper Scissors
                </h2>
                <div className="mt-4 flex space-x-4">
                  <Link
                    to="https://rock-paper-scissors-tan-six.vercel.app/"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1/Rock-Paper-Scissors"
                    target="_blank"
                    className="w-1/2"
                  >
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 w-full rounded-lg transition-all duration-300 transform hover:scale-105">
                      CODE
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
