/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        700: "700px",
      },
      height: {
        56: "56px",
      },
      fontSize: {
        18: "18px",
      },
      fontFamily: {
        merriweather: ["Merriweather", "sans-serif"],
        sans: ["Arial"],
      },
      padding: {
        13: "13px",
      },
      borderWidth: {
        3: "3px",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
