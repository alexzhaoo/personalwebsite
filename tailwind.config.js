const { Bebas_Neue } = require('next/font/google');

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
      "700" : "700px",
      "825" : "825px",
      "1150" : "1150px"
    },
    margin:{
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
