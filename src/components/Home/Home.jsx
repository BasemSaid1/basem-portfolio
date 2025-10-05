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
      <section className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
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
              <Link
                className="pr-2"
                to="https://drive.google.com/file/d/1SmF1kdiP5U5G2j6Nuc20Ohq-8VoaahkC/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            <div className="pt-5 text-white text-3xl flex justify-center gap-6">
              <Link
                to="https://www.linkedin.com/in/basem-said-468b7b274"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition transform hover:scale-125 duration-300"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link
                to="https://github.com/BasemSaid1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition transform hover:scale-125 duration-300"
              >
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link
                to="https://wa.me/01095435168"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition transform hover:scale-125 duration-300"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="py-6">
            <h1 className="text-white text-center text-4xl md:text-5xl py-7 pb-32 font-extrabold font-['Poppins'] tracking-tight animate-[pulse_2s_ease-in-out_infinite]">
              Check Out My Projects
            </h1>
            <div className="flex flex-wrap justify-center gap-8 md:w-[90%] w-[95%] mx-auto">
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
            </div>
            <div className="mt-7 mx-auto text-center">
              <Link to="projects">
                <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 rounded-lg">
                  SEE MORE
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="py-6 px-4 md:px-0">
            <h1 className="text-white text-center text-5xl md:text-6xl font-extrabold font-['Poppins'] py-7 pb-32 tracking-tight animate-[pulse_2s_ease-in-out_infinite]">
              Technical Skills
            </h1>
            <div className="flex flex-wrap justify-center gap-6 mb-10 md:w-[80%] w-[95%] mx-auto">
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imghtml}
                      alt="HTML"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">HTML</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imgcss}
                      alt="CSS"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">CSS</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imgjs}
                      alt="JS"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">JS</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imgboot}
                      alt="Bootstrap"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">
                    Bootstrap
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imgreact}
                      alt="React.js"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">
                    React.js
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imgtailwind}
                      alt="Tailwind"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">
                    Tailwind
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imgredux}
                      alt="Redux"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">Redux</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imgrouter}
                      alt="React Router Dom"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">
                    React Router Dom
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imgtypescript}
                      alt="TypeScript"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">
                    TypeScript
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imgsass}
                      alt="Sass"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">Sass</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imgnext}
                      alt="Next.js"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">
                    Next.js
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imgui}
                      alt="Material UI"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">
                    Material UI
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imggit}
                      alt="Git"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">Git</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 text-center group">
                <div className="bg-gray-800 border-2 border-blue-600 rounded-xl p-4 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
                  <div className="mt-4">
                    <img
                      className="mx-auto w-[80px] h-[80px] object-contain animate-[blink_1.5s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                      src={imggithub}
                      alt="GitHub"
                    />
                  </div>
                  <p className="mt-3 text-white text-lg font-semibold">
                    GitHub
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/about">
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-base font-semibold text-white rounded-lg group bg-gradient-to-br from-emerald-600 to-blue-500 group-hover:from-emerald-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 transition-all duration-300 transform hover:scale-105">
                  <span className="relative px-6 py-3 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    About Me
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
