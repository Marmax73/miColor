/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nude: "#f5e9e2",
        lavanda: "#d6c7e8",
        rosa: "#f2b5d4",
        oro: "#e6c36d",
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
