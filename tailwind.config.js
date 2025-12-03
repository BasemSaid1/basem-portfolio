/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" }, // توهج
          "50%": { opacity: "0.3" }, // تقليل الشفافية (بدلاً من إطفاء العنصر بالكامل)
        },
      },
      animation: {
        blink: "blink 3s ease-in-out infinite", // توهج وتقليل الشفافية كل 3 ثواني بشكل سلس
      },
    },
  },
  plugins: [],
};
