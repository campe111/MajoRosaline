/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        olive: "#6B8E23",
        beige: "#F5F5DC",
        blush: "#E8C8C8",
        warmGray: "#D3D3D3",
        softBlack: "#2F2F2F"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Open Sans", "sans-serif"]
      }
    }
  },
  plugins: []
};

