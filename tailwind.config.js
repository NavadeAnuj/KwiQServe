/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4F46E5', // Indigo
        'secondary': '#FBBF24', // Amber
        'background': '#F9FAFB', // Light Gray
        'card': '#FFFFFF', // White
      },
    },
  },
  plugins: [],
}