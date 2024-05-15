/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "myriad-pro": ["Myriad Pro", "sans-serif"],
      gotham: ["Gotham", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    letterSpacing: {
      "hero-spacing": ["-0.5rem"],
    },
    extend: {},
  },
  plugins: [],
};
