/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      slate: colors.slate,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      black: "#191919",
    },
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
