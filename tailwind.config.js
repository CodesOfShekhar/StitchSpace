/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDFBF7',
        teal: '#2D6A4F',
        mustard: '#E9C46A',
      },
    },
  },
  plugins: [],
}

