/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      colors: {
        "customGreen-200": "hsl(148, 38%, 91%)", // lighter
        "customGreen-500": "hsl(186, 15%, 59%)", // medium
        "customGreen-600": "hsl(169, 82%, 27%)", // bold
        "customGreen-900": "hsl(187, 24%, 22%)", // darker
        customRed: "hsl(0, 66%, 54%)",
      },
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
