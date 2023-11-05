/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whitish: "#ebfaf6",
        blackish: "#060908",
        primary: "#1eb854",
        secondary: "#1db990",
        accent: "#21e4a3",
        success: "#36d399",
        warning: "#fbbd23",
        error: "#f87272",
        footer: "#131615",
        neutral: "#0E1110",
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
