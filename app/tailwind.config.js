/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#ffcb85",
        background: "#071c39",
        text: "#ffffff",
        error: "#FF8981",
        success: "#4F9C4E",
      },
    },
  },
  plugins: [],
};
