/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",             // তোমার index.html ফাইল root এ
    "./script.js",              // যদি JS এ class ব্যবহার করো
    "./src/**/*.{js,ts,jsx,tsx}" // src folder থাকলে
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3238F2",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
