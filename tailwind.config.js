/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{"main":"rgba(19, 21, 80, 1)"}
    },
  },
  plugins: [],
}