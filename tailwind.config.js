/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#3238F2'
      },
      fontFamily: {
        'display': ['poppins', 'sans-serif'],
        'body' : ['inter' , 'sans-serif']
      }
    },
  },
  plugins: [],
}
