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
import project10 from "../../assets/project10.png";
import project11 from "../../assets/project11.png";
import project12 from "../../assets/project12.png";
import project13 from "../../assets/project13.png";
import project14 from "../../assets/project14.jpg";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <section className="bg-black">
        <div className="mt-7 py-36">
          <h1 className="text-white text-center text-4xl md:text-5xl mb-16">
            Check Out My Projects
          </h1>
          <div className="flex flex-wrap  mb-10 md:w-[80%] w-[95%] mx-auto">
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://fresh-cart-ewou0tuim-basem-saids-projects.vercel.app"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full "
                      src={project13}
                      alt="photo-project13"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    FreshCart App
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://fresh-cart-ewou0tuim-basem-saids-projects.vercel.app"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/FreshCart-App/tree/main"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://news-app-nine-pi.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full "
                      src={project14}
                      alt="photo-project14"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    GlobalNews
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://news-app-nine-pi.vercel.app/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/News-App"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://la-collection-e-commerce-ruby.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full"
                      src={project11}
                      alt="photo-project5"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    La-collection E-commerce
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://la-collection-e-commerce-ruby.vercel.app/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/La-collection-E-commerce"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://recipe-food-amber.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full"
                      src={project12}
                      alt="photo-project5"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">Recipe</h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://recipe-food-amber.vercel.app/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/Recipe-food"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/weather-app/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full"
                      src={project1}
                      alt="photo-project1"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    weather-app
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://basemsaid1.github.io/weather-app/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/weather-app"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Login-JS-LocalStorage/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full"
                      src={project2}
                      alt="photo-project2"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    Login-app
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://basemsaid1.github.io/Login-JS-LocalStorage/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/Login-JS-LocalStorage"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Todo-list/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full"
                      src={project3}
                      alt="photo-project3"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    Todo-list
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://basemsaid1.github.io/Todo-list/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/Todo-list"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Calculator-app/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full"
                      src={project4}
                      alt="photo-project4"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    Calculator-app
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://basemsaid1.github.io/Calculator-app/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/Calculator-app"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/quran-app/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full"
                      src={project10}
                      alt="photo-project5"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    Quran App
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://basemsaid1.github.io/quran-app/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/quran-app"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Daniels-Template/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full"
                      src={project5}
                      alt="photo-project5"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    Daniels-Template
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://basemsaid1.github.io/Daniels-Template/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/Daniels-Template.git"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/BookMark/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full"
                      src={project6}
                      alt="photo-project6"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    BookMark
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://basemsaid1.github.io/BookMark/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/BookMark"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/Random-Quote-Generator/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full"
                      src={project7}
                      alt="photo-project7"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    Random-Quote-Generator
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://basemsaid1.github.io/Random-Quote-Generator/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/Random-Quote-Generator"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://basemsaid1.github.io/slider-js/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full"
                      src={project8}
                      alt="photo-project8"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    slider-js
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://basemsaid1.github.io/slider-js/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/slider-js"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      CODE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="relative mr-3 mb-5 transition-all duration-[0.3s] hover:scale-105 group">
                <div>
                  <Link
                    to="https://first-framework-mu.vercel.app/"
                    target="_blank"
                  >
                    <img
                      className="w-[100%] h-full"
                      src={project9}
                      alt="photo-project9"
                    />
                  </Link>
                  <h2 className="mt-3 text-white text-3xl font-bold">
                    First-framework
                  </h2>
                </div>
                <div className=" absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-[0.3s]">
                  <Link
                    target="_blank"
                    to="https://first-framework-mu.vercel.app/"
                  >
                    <button className="text-white mr-2 font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                      DEMO
                    </button>
                  </Link>
                  <Link
                    target="_blank"
                    to="https://github.com/BasemSaid1/first-framework"
                  >
                    <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
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
