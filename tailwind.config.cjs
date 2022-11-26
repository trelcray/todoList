/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
      },
      keyframes: {
        progress: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        progress: 'progress 5s ease-in infinite',
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
        5000: '5000ms',
      },
    },
  },
  plugins: [],
};
