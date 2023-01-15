/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3888",
        action: "#ffda4b",
        darkaction: "#ffda47",
      }
    },
  },
  plugins: [],
};
