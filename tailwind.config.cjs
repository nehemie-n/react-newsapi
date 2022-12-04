/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#C84AB5",
        "dark-pink": "#461E40",
        "primary-black": "#0E1A34",
        "second-black": "#0B1121",
      },
    },
  },
  plugins: [],
};
