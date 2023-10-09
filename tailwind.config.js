/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-theme': '#00abf0',
        'dark-blue': '#081b29'
      },
    },
  },
  plugins: [],
}

