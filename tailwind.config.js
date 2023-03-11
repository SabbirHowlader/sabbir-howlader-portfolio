/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'gloock': ['Gloock', 'serif'],
        'serif': ['PT Serif', 'serif']
      }
    },
  },
  plugins: [require("daisyui"),  require('flowbite/plugin')],
}
