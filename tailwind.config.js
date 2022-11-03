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
      red: colors.red,
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
      animation: {
        cameraPan: "cameraPan 30s infinite",
      },
      keyframes: {
        cameraPan: {
          "0%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "40% 10%" },
          "50%": { backgroundPosition: "0% 10%" },
          "75%": { backgroundPosition: "10% 40%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
    },
  },
  plugins: [],
};
