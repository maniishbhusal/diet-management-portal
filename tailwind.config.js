/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#0F172A',
        'secondary': '#64748B',
        'yellow-white': '#F6EEC9',
        'greeen': '#0A6847',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

