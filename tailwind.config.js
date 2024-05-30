/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-clear-orange': '#FF9F66',
        'vintage-flash-orange': '#FF5F00',
        'back-purple': '#5D5A88',
        'custom-p-900': '#8D8BA7',
      },
      fontFamily: {
        'dm-sans': ["Dm Sans", "sans-serif"],
        'archivo': ["Archivo Black", "sans-serif"]
      }
    },
  },
  plugins: [],
}

