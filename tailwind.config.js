/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3238F2", // custom primary color
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"], // headings
        body: ["Inter", "sans-serif"],      // body text
      },
      scale: {
        "-1": "-1", // flip support (scale-x-[-1])
      },
      translate: {
        // custom translate values
        "-36": "-9rem",   // like -translate-x-36
        "-48": "-12rem",  // like -translate-x-48
      },
    },
  },
  plugins: [],
};
