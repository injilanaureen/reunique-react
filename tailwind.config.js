/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React component paths
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#184E77',
        'primary-color': '#D9ED92',
        'secondary-color': '#1A759F',
        'tertiary-color': '#1E6091',
        'text-color': '#ffffff',
        'btn-text-color': '#1a1a1a',
      },
      animation: {
        slide: 'slide 10s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    },
  ],
};
