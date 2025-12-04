/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        rose: "#fb6066",
        cream: "#ffefc1",
        honey: "#fdd86e",
        melon: "#ffa463",
        terra: "#f66b40"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Open Sans", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
        delius: ["Delius Unicase", "cursive"],
        luckiest: ["Luckiest Guy", "cursive"]
      }
    }
  },
  plugins: []
};

