/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '50': '40vw',
        '50rem': '50rem',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, transparent, #ebebeb)', // Define o gradiente personalizado
      },
      colors: {
          'yellow-mercado' : '#ffe600'
      }
  
    },
  },
  plugins: [],
}
