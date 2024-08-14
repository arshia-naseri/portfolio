/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ["minecraft", "sans-serif"],
        vcr: ["vcr", "sans-serif"],
      },
      colors: {
        vcrBlack: "rgb(29,31,34)",
        mainWhite: "rgb(240,234,214)",
      },
    },
  },
  plugins: [],
};
