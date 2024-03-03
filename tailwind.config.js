/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // Manrope font ailesini varsayılan olarak belirleyin
      },
      colors: {
        green: {
          DEFAULT: '#00CC7A', // Özel yeşil rengi ekleyin
        },
      }
    },
  },
  plugins: [],
}