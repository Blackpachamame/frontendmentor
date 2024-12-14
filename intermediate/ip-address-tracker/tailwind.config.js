/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        "very-Dark-Gray": "hsl(0, 0%, 17%)",
        "dark-Gray": "hsl(0, 0%, 59%)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        "pattern-desktop": "url('/src/assets/images/pattern-bg-desktop.png')",
        "pattern-mobile": "url('/src/assets/images/pattern-bg-mobile.png')",
      },
      screens: {
        xs: "376px",
        // => @media (min-width: 376px) { ... }
      },
    },
  },
  plugins: [],
};
