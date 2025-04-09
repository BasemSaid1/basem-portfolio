import React from "react";
import header from "../../assets/header.jpg";
import imghtml from "../../assets/html.png";
import imgcss from "../../assets/css.png";
import imgjs from "../../assets/javascript-svgrepo-com.svg";
import imgboot from "../../assets/bootstrap-svgrepo-com.svg";
import imgreact from "../../assets/react.svg";
import imggithub from "../../assets/github.png";
import imgtailwind from "../../assets/tailwind-svgrepo-com.svg";
import imgredux from "../../assets/redux-svgrepo-com.svg";
import imgrouter from "../../assets/react-router-svgrepo-com.svg";
import imggit from "../../assets/git-svgrepo-com.svg";
import imgtypescript from "../../assets/typescript-icon-svgrepo-com.svg";
import imgsass from "../../assets/sass-svgrepo-com.svg";
import imgnext from "../../assets/next-dot-js-svgrepo-com.svg";
import imgui from "../../assets/material-ui-svgrepo-com.svg";
import project1 from "../../assets/project1.png";
import project14 from "../../assets/project14.jpg";
import project12 from "../../assets/project12.png";
import project13 from "../../assets/project13.png";
import project18 from "../../assets/project18.png";
import project15 from "../../assets/project15.png";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [content, setcontent] = useState("");
  const fullText = " I'm Basem Said";

  useEffect(() => {
    const typing = setInterval(() => {
      setcontent((prevText) => prevText + fullText.charAt(prevText.length));
      if (content === fullText) clearInterval(typing);
    }, 100);

    return () => clearInterval(typing);
  }, []);

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const texts = ["Frontend Developer", "React.Js Developer"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseSpeed = 1000;

  useEffect(() => {
    const currentText = texts[index];
    let interval;

    if (isTyping && text.length < currentText.length) {
      interval = setInterval(() => {
        setText((prev) => prev + currentText.charAt(text.length));
      }, typingSpeed);
    }

    if (text.length === currentText.length && isTyping) {
      clearInterval(interval);
      setTimeout(() => {
        setIsTyping(false);
        setIsDeleting(true);
      }, pauseSpeed);
    }

    if (isDeleting && text.length > 0) {
      interval = setInterval(() => {
        setText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    }

    if (text.length === 0 && isDeleting) {
      clearInterval(interval);
      setTimeout(() => {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }, pauseSpeed);
    }

    return () => clearInterval(interval);
  }, [text, isTyping, isDeleting, index]);

  return (
    <>
      <section className="bg-black">
        <section
          className="h-screen bg-cover bg-center bg-[#000000b3] bg-blend-overlay flex items-center justify-center"
          style={{ backgroundImage: `url(${header})` }}
        >
          <div className="text-center">
            <h1 className="text-white font-bold md:text-4xl text-3xl text-center ">
              Hi All, {content}
            </h1>
            <h2 className="text-white text-3xl text-center pt-3 mr-1 min-h-[60px] overflow-hidden">
              {text}
            </h2>
            <div className="pt-5">
              <Link className="pr-2" to="">
                <button className="bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg py-3 px-4">
                  My Resume
                </button>
              </Link>
              <Link to="contact">
                <button className="bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg py-3 px-4">
                  Contact Me
                </button>
              </Link>
            </div>
            <div className=" pt-5 text-white text-3xl">
              <Link
                to="https://www.linkedin.com/in/basem-said-468b7b274"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin me-3"></i>
              </Link>
              <Link to="https://github.com/BasemSaid1" target="_blank">
                <i className="fa-brands fa-github me-3"></i>
              </Link>

              <Link to="https://wa.me/01095435168" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="py-6">
            <h1 className="text-white text-center text-4xl md:text-5xl py-7 pb-32">
              Check Out My Projects
            </h1>
            <div className="flex flex-wrap  mb-10 md:w-[80%] w-[95%] mx-auto">
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

              <div className="mt-7 mx-auto">
                <Link to="projects">
                  <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                    SEE MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="py-6">
            <h1 className="text-white text-center text-5xl py-7 pb-32">
              Technical Skills
            </h1>
            <div className="flex flex-wrap  mb-10 md:w-[80%] w-[95%] mx-auto">
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imghtml}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">HTML</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imgcss}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">CSS</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imgjs}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">JS</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imgboot}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">Bootstrap</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imgreact}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">React.js</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imgtailwind}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">Tailwind</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imgredux}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">Redux</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imgrouter}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">React Router Dom</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imgtypescript}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">TypeScript</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imgsass}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">Sass</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imgnext}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">Next.Js</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imgui}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">Material Ui</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imggit}
                      alt="pto"
                    />
                  </div>
                  <p className="mt-3 text-white">Git</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 text-center ">
                <div className="border-blue-500 border mr-3 mb-3 py-2 px-2 rounded-lg transition-transform duration-500 ease-out transform  hover:scale-105">
                  <div className="mt-4">
                    <img
                      className="animate-blink mx-auto w-[100px]"
                      src={imggithub}
                      alt="photo"
                    />
                  </div>
                  <p className="mt-3 text-white">Github</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="about">
                <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                  ABOUT ME
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
