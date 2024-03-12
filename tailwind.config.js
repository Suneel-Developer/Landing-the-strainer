/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-100": "#f4cd59",
        "blue-100": '#5271ff',
        "light-bg": 'rgba(255, 255, 255, 0.1)',
        "black-100": 'rgba(14, 19, 24, 0.7)',
        "black-200": '#0e1318',
        "gray-100": 'rgba(64, 87, 109, 0.07)',
        "black-400": "rgba(14, 19, 24, 0.45)",
      },
      backgroundColor: {
        'btn': "linear-gradient(90deg, #00C4CC 0%, #7D2AE8 100%)"
      },
      boxShadow: {
        "modalshadow": "0px 2px 18px 0px rgba(14, 19, 24, 0.25), 0px 0px 1px 0px rgba(14, 19, 24, 0.02)"
      },
      screens: {
        "xxl": "1200px",
        "xs": "340px",
      }
    },
  },
  plugins: [],
}