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
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project14 from "../../assets/project14.png";
import project12 from "../../assets/project12.png";
import project13 from "../../assets/project13.png";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [content, setcontent] = useState("");
  const fullText = " I'm Basem Said";

  useEffect(() => {
    const typing = setInterval(() => {
      setcontent((prevText) => prevText + fullText.charAt(prevText.length));
      if (content === fullText) clearInterval(typing);
    }, 100); // يمكنك تعديل المدة بين كل حرف

    return () => clearInterval(typing);
  }, []);

  const [text, setText] = useState(""); // النص الذي يتم كتابته
  const [index, setIndex] = useState(0); // فهرس النص الحالي
  const [isDeleting, setIsDeleting] = useState(false); // هل يتم مسح النص؟
  const [isTyping, setIsTyping] = useState(true); // هل يتم الكتابة؟

  const texts = ["Frontend Developer", "React.Js Developer"]; // النصوص التي سيتم الكتابة والتبديل بينها
  const typingSpeed = 100; // سرعة الكتابة (بالملي ثانية) - أسرع من قبل
  const deletingSpeed = 50; // سرعة المسح (بالملي ثانية) - أسرع من قبل
  const pauseSpeed = 1000; // مدة التوقف بين الكتابة والمسح (بالملي ثانية) - أقل من قبل

  useEffect(() => {
    const currentText = texts[index]; // النص الحالي
    let interval;

    // إذا كانت الكتابة قيد التنفيذ
    if (isTyping && text.length < currentText.length) {
      interval = setInterval(() => {
        setText((prev) => prev + currentText.charAt(text.length)); // كتابة حرف جديد
      }, typingSpeed);
    }

    // إذا كان النص مكتملًا، ننتظر ثم نبدأ في المسح
    if (text.length === currentText.length && isTyping) {
      clearInterval(interval);
      setTimeout(() => {
        setIsTyping(false);
        setIsDeleting(true); // بدء المسح
      }, pauseSpeed);
    }

    // إذا كان النص يتم مسحه
    if (isDeleting && text.length > 0) {
      interval = setInterval(() => {
        setText((prev) => prev.slice(0, -1)); // مسح حرف واحد
      }, deletingSpeed);
    }

    // بعد مسح النص بالكامل، ننتقل إلى النص التالي
    if (text.length === 0 && isDeleting) {
      clearInterval(interval);
      setTimeout(() => {
        setIsDeleting(false); // التبديل إلى الكتابة
        setIndex((prevIndex) => (prevIndex + 1) % texts.length); // التبديل إلى النص التالي
        setIsTyping(true); // بدء الكتابة للنص التالي
      }, pauseSpeed);
    }

    return () => clearInterval(interval); // تنظيف الـ interval عند الانتهاء
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
                      to="https://recipe-food-amber.vercel.app/"
                      target="_blank"
                    >
                      <img
                        className="w-[100%] h-full"
                        src={project12}
                        alt="photo-project5"
                      />
                    </Link>
                    <h2 className="mt-3 text-white text-3xl font-bold">
                      Recipe
                    </h2>
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
