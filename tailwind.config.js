/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#1C1C1C",
        tertiary: "#3F3F3F",
        hero_color: "#CFCFCF",
        hero_header: "#F6F6F6",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/assets/images/noise.png')",
      },
    },
  },
  plugins: [],
};
