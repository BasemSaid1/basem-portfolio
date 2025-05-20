import React, { useState } from "react";
import style from "./contact.module.css";

export default function Contact() {
  return (
    <>
      <section className="bg-black">
        <div className="pt-32 pb-20 ">
          <h1 className="text-white text-center text-4xl md:text-5xl font-extrabold font-['Poppins'] tracking-tight animate-[pulse_2s_ease-in-out_infinite]">
            Get In Touch
          </h1>

          <div className="flex flex-wrap justify-center text-center text-white mt-11 gap-8">
            <div
              className="w-[95%] md:w-1/2 lg:w-1/4 group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-gray-800 border-2 border-gray-600 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)]">
                <i className="fa-solid fa-location-dot text-4xl text-emerald-500"></i>
                <p className="font-bold mt-3 text-xl">Address</p>
                <h6 className="text-gray-300">Egypt-Al-Sharqia-Zagazig</h6>
              </div>
            </div>
            <div
              className="w-[95%] md:w-1/2 lg:w-1/4 group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-gray-800 border-2 border-gray-600 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)]">
                <i className="fa-solid fa-phone text-4xl text-emerald-500"></i>
                <p className="font-bold mt-3 text-xl">Phone</p>
                <h6 className="text-gray-300">+201095435168</h6>
              </div>
            </div>
            <div
              className="w-[95%] md:w-1/2 lg:w-1/4 group"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-gray-800 border-2 border-gray-600 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.7)]">
                <i className="fa-regular fa-envelope text-4xl text-emerald-500"></i>
                <p className="font-bold mt-3 text-xl">Email</p>
                <h6 className="text-gray-300">Bbasemsaid@gmail.com</h6>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 pb-16 rounded-2xl shadow-lg">
            <h1 className="text-white text-center text-4xl md:text-5xl font-extrabold font-['Poppins'] tracking-tight animate-[pulse_2s_ease-in-out_infinite] mb-6">
              Send Message
            </h1>
            <form className="max-w-xl mx-auto px-6">
              <div className="relative mb-6 group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="peer w-full bg-transparent border-b-2 border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-emerald-500 px-2 py-3 transition-all"
                  placeholder="Enter Your Name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-2 top-3 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-400"
                >
                  Enter Your Name
                </label>
              </div>

              <div className="relative mb-6 group">
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="peer w-full bg-transparent border-b-2 border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-emerald-500 px-2 py-3 transition-all"
                  placeholder="Enter Your Age"
                  required
                />
                <label
                  htmlFor="age"
                  className="absolute left-2 top-3 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-400"
                >
                  Enter Your Age
                </label>
              </div>

              <div className="relative mb-6 group">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="peer w-full bg-transparent border-b-2 border-gray-500 text-white placeholder-transparent focus:outline-none focus:border-emerald-500 px-2 py-3 transition-all resize-none"
                  placeholder="Leave a comment..."
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-2 top-3 text-sm text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-emerald-400"
                >
                  Leave a comment...
                </label>
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-emerald-600 transition-all duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
