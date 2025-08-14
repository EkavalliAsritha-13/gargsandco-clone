/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      animation: {
        'zoom-in': 'zoomIn 8s ease-in-out forwards',
        'zoom-out': 'zoomOut 8s ease-in-out forwards',
        fadeIn: 'fadeIn 1s ease forwards',
        countUp: 'countUp 2s ease-out forwards', // optional visual enhancement
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      colors: {
        'footer-green-dark': '#002200',
        'footer-green-mid': '#003300',
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(to bottom, #000000, #003300, #000000)',
      },
    },
  },
  plugins: [],
};
