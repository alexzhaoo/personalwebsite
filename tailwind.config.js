const { Bebas_Neue } = require('next/font/google');
const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode:"class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height:{
      "350" : "350px",
      "450": "450px",
      "700" : "700px",
      "825" : "825px",
      "1150" : "1150px"
    },
      width:{
        "350" : "350px",
        "450": "450px"
      },
    margin:{
      "22spec" : "84px",
      "395" : "395px",
      "425" : "425px",
      "450" : "450px",
      "500" : "500px",
      "550" : "550px",
      "600" : "600px",
      "623" : "623px",
      "625" : "625px",
      "630" : "630px",
      "650" : "650px",
      "680" : "680px",
      "700" : "700px",
      "750" : "750px",
      "800" : "800px"
    },
      fontFamily:{
        burton:"burtons",
        Bebas_Neue:"beba"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
