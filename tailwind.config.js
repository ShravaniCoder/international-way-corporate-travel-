/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#2B1A0F",
        gold: "#B88B3C",
        champagne: "#F1D295",
        ivory: "#F9F6EF",
        taupe: "#A8977A",
        slate: "#3E3A32",
        onyx: "#0F0F0F",
      },
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        luxury: "0 18px 55px rgba(43, 26, 15, .16)",
        gold: "0 10px 30px rgba(184, 139, 60, .22)",
      },
    },
  },
  plugins: [],
};