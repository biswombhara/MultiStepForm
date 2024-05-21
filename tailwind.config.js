/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*", "./src/components/*"],
  theme: {
    extend: {},
    screens :{
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
  },
  plugins: [],
}