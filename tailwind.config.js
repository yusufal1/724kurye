/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#eb5e28',
        secondary: '#023047'
      },
      fontFamily: {
        sans: ['Chivo Mono', 'monospace'],
      },
    }
  },
  plugins: [],
}

