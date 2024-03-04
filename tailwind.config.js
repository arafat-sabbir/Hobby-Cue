/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        main:"#050038",
        background:"#4262FF"
      }
    },
  },
  plugins: [require("daisyui")],
};
