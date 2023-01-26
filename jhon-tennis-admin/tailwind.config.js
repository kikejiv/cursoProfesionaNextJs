/** @type {import('tailwindcss').Config} */
const colors = require ('tailwind/colors');

module.exports = {
  
  content: ['./src/**/*{html,js,jsx}'],
  theme: {
    colors: {
      ...colors,
    },
  },
}
