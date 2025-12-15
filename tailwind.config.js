/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'snappy-blue': '#043687',
        'snappy-blue-light': '#0056FF',
        'snappy-blue-dark': '#002D72',
        'snappy-blue-100': '#BEDBFF',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

