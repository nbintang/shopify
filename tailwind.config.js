/** @type {import('tailwindcss').Config} */
export default ({
  content: [
    "./index.html",
   "./src/**/*.{vue,js,ts,jsx,tsx}",
],
theme: {
  extend: {
    fontFamily: {
      "lora": ["Lora", "serif"],
      "poppins": ["Poppins", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"]
    },
      colors: {
        "primary" : "#0F1035",
        "secondary" : "#365486",
        "tertiary" : "#7FC7D9",
        "fourth" : "#DCF2F1"
      },
    }
  },
  plugins: [],
});


