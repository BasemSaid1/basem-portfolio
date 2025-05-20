import React from "react";
import imgbasem from "../../assets/basem.jpg";

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
        <div className="pt-32 pb-20">
          <h1 className="text-white text-center text-5xl md:text-6xl font-extrabold font-['Poppins'] tracking-tight animate-[pulse_2s_ease-in-out_infinite]">
            About Me
          </h1>
          <div className="flex flex-wrap justify-center items-center w-[95%] md:w-[80%] mx-auto mt-10">
            <div className="w-full md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <div className="relative group">
                <img
                  src={imgbasem}
                  alt="Basem Said"
                  className="rounded-full w-64 h-64 object-cover border-4 border-blue-600 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] animate-[pulse_3s_ease-in-out_infinite]"
                />
                <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="w-full md:w-3/4 md:pl-8">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 animate-[fadeIn_1s_ease-out]">
                I'm Basem Said, a dedicated and aspiring Frontend Developer with
                a strong passion for web development, specializing in React.js.
                Eager to expand my skills and knowledge, I continuously seek out
                learning opportunities and hands-on projects. My goal is to
                contribute to innovative web applications that provide
                exceptional user experiences. I am on a journey to becoming a
                Front End Developer, driven by curiosity and a commitment to
                excellence.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Bootstrap",
                  "React.js",
                  "Tailwind",
                  "Redux",
                  "React Router Dom",
                  "TypeScript",
                  "Sass",
                  "Next.js",
                  "Material UI",
                  "Clean Code",
                  "Git",
                  "GitHub",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="relative bg-gray-800 border-2 border-blue-600 text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-[fadeIn_0.5s_ease-out] group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                    <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
