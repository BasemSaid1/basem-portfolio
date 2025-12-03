import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
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

const TechnicalSkillsSlider = () => {
  const skillItems = [
    { id: 1, name: "HTML", img: imghtml },
    { id: 2, name: "CSS", img: imgcss },
    { id: 3, name: "JS", img: imgjs },
    { id: 4, name: "Bootstrap", img: imgboot },
    { id: 5, name: "React.js", img: imgreact },
    { id: 6, name: "Tailwind", img: imgtailwind },
    { id: 7, name: "Redux", img: imgredux },
    { id: 8, name: "React Router Dom", img: imgrouter },
    { id: 9, name: "TypeScript", img: imgtypescript },
    { id: 10, name: "Sass", img: imgsass },
    { id: 11, name: "Next.js", img: imgnext },
    { id: 12, name: "Material UI", img: imgui },
    { id: 13, name: "Git", img: imggit },
    { id: 14, name: "GitHub", img: imggithub },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const [visibleDots, setVisibleDots] = useState(4);
  const totalSlides = skillItems.length;

  useEffect(() => {
    // تحديث عدد النقاط المرئية حسب حجم الشاشة
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleDots(3);
      } else if (window.innerWidth < 1024) {
        setVisibleDots(4);
      } else {
        setVisibleDots(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // إضافة CSS ديناميكي
    const style = document.createElement("style");
    style.innerHTML = `
      .skills-swiper {
        padding-bottom: 80px !important;
      }
      
      .skills-swiper .swiper-pagination {
        bottom: 30px !important;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
      }
      
      .skills-swiper .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.3);
        margin: 0 4px !important;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0.6;
        transform: scale(0.8);
        position: relative;
      }
      
      .skills-swiper .swiper-pagination-bullet-active {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6) !important;
        transform: scale(1.2);
        opacity: 1;
        box-shadow: 0 0 12px rgba(59, 130, 246, 0.7);
      }
      
      .skills-swiper .swiper-pagination-bullet-active-prev,
      .skills-swiper .swiper-pagination-bullet-active-next {
        background-color: rgba(59, 130, 246, 0.7) !important;
        transform: scale(1);
        opacity: 0.9;
      }
      
      .skills-swiper .swiper-slide {
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      
      .skills-swiper .swiper-slide-active {
        transform: scale(1.05);
      }
      
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
        50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
      }
      
      .skill-card {
        animation: pulse-glow 3s ease-in-out infinite;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      
      .swiper-slide-active .skill-card {
        animation: float 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getBulletClassName = (index) => {
    // حساب النقاط المرئية حول النقطة النشطة
    const halfVisible = Math.floor(visibleDots / 2);
    const startIndex = Math.max(0, activeSlide - halfVisible);
    const endIndex = Math.min(totalSlides - 1, activeSlide + halfVisible);

    // إذا كانت النقطة خارج النطاق المرئي، إخفاؤها
    if (index < startIndex || index > endIndex) {
      return "swiper-pagination-bullet swiper-pagination-bullet-hidden";
    }

    let className = "swiper-pagination-bullet";

    if (index === activeSlide) {
      className += " swiper-pagination-bullet-active";
    } else if (index === activeSlide - 1 || index === activeSlide + 1) {
      className += " swiper-pagination-bullet-active-prev";
    } else if (index === activeSlide - 2 || index === activeSlide + 2) {
      className += " swiper-pagination-bullet-active-next";
    }

    return className;
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative py-12 px-4 md:px-0">
        <h1 className="text-white text-center text-5xl md:text-6xl font-extrabold font-['Poppins'] py-7 pb-8 tracking-tight relative">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Technical Skills
          </span>
        </h1>

        <div className="mb-10 md:w-[85%] w-[95%] mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={28}
            slidesPerView={2}
            speed={800}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${getBulletClassName(index)}"></span>`;
              },
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
                speed: 700,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 24,
                speed: 750,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 28,
                speed: 800,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
                speed: 850,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 32,
                speed: 900,
              },
            }}
            loop={true}
            className="skills-swiper"
            onSlideChange={(swiper) => {
              setActiveSlide(swiper.realIndex);
            }}
            onSwiper={(swiper) => {
              setActiveSlide(swiper.realIndex);
            }}
          >
            {skillItems.map((skill) => (
              <SwiperSlide key={skill.id}>
                <div className="text-center group h-full">
                  <div className="skill-card bg-gray-800/70 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] h-full flex flex-col justify-between">
                    <div className="mt-4">
                      <img
                        className="mx-auto w-[90px] h-[90px] object-contain filter drop-shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        src={skill.img}
                        alt={skill.name}
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="mt-4 h-8 text-white text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        {skill.name}
                      </p>
                      <div className="mt-3 h-1 w-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-12">
          <Link to="/about">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-semibold text-white rounded-xl group bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 group-hover:from-emerald-500 group-hover:via-blue-500 group-hover:to-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-800 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-gray-900 rounded-lg group-hover:bg-opacity-0">
                <span className="flex items-center gap-2">
                  About Me
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkillsSlider;
