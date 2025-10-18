/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        heroFrom: '#9D7EB9',
        heroTo: '#E8D8F1',
        aboutBg: '#FBE4E7',
        desertsBg: '#FFF5E1',
        decorBg: '#D5F2E3',
        contactBg: '#FFE7D1',
        footerBg: '#7A5E9A'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1.5s ease-out',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}