import React from "react";
import imgbasem from "../../assets/basem.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TechnicalSkillsSlider from "../TechnicalSkillsSlider/TechnicalSkillsSlider";

export default function Home() {
  const [content, setcontent] = useState("");
  const fullText = "I'm Basem Said";

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
      <section className="bg-black min-h-screen">
        {/* القسم المعدل */}
        <section className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-black">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* الصورة على اليسار */}
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative w-full max-w-lg">
                  <img
                    src={imgbasem}
                    alt="Basem Said"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-900/20 to-blue-900/20 rounded-3xl blur-xl -z-10"></div>
                </div>
              </div>

              {/* النص على اليمين */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
                  Hi All, <span className="text-emerald-400">{content}</span>
                </h1>

                <h2 className="text-emerald-300 text-2xl md:text-3xl lg:text-4xl mb-6 min-h-[50px] overflow-hidden">
                  {text}
                </h2>

                <div className="mb-8">
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl text-left md:text-justify">
                    I'm Basem Said, a dedicated and aspiring Frontend Developer
                    with a strong passion for web development, specializing in
                    React.js. Eager to expand my skills and knowledge, I
                    continuously seek out learning opportunities and hands-on
                    projects. My goal is to contribute to innovative web
                    applications that provide exceptional user experiences. I am
                    on a journey to becoming a Front End Developer, driven by
                    curiosity and a commitment to excellence.
                  </p>
                </div>

                {/* روابط التواصل */}
                <div className="text-white text-3xl flex justify-center lg:justify-start gap-6">
                  <Link
                    to="https://www.linkedin.com/in/basem-said-468b7b274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition transform hover:scale-125 duration-300"
                  >
                    <span className="text-base">Linkedin</span>
                  </Link>
                  <Link
                    to="https://github.com/BasemSaid1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition transform hover:scale-125 duration-300"
                  >
                    <span className="text-base">Github</span>
                  </Link>
                  <Link
                    to="https://wa.me/01095435168"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition transform hover:scale-125 duration-300"
                  >
                    <span className="text-base">Whatsapp</span>
                  </Link>
                </div>

                {/* الأزرار */}
                <div className="flex  justify-center lg:justify-start gap-6 mt-10">
                  <Link
                    to="https://drive.google.com/file/d/1fogwuWqjpnSyuWKsaHoGRfDRZzKwT0Hl/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg py-3 px-6 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-800/30">
                      My Resume
                    </button>
                  </Link>

                  <Link to="contact">
                    <button className="bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg py-3 px-6 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-800/30">
                      Contact Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="py-6">
            <h1 className="text-white text-center text-5xl md:text-6xl font-extrabold font-['Poppins'] py-7 pb-8 tracking-tight relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Check Out My Projects
              </span>
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
                <button className="text-white font-bold bg-emerald-800 hover:bg-emerald-700 py-3 px-4 mt-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  SEE MORE
                </button>
              </Link>
            </div>
          </div>
        </section>
        <TechnicalSkillsSlider />
      </section>
    </>
  );
}
