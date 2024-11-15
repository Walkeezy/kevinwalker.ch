/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      karla: ['var(--karla-font)', 'sans-serif'],
      barlow: ['var(--barlow-font)', 'sans-serif'],
      handwritten: ['var(--lemon-yellow-sun-font)', 'sans-serif'],
    },
    animation: {
      gradient: 'gradient 13s ease-in-out infinite',
    },
    keyframes: {
      gradient: {
        '0%': { 'background-position': '0% 50%' },
        '50%': { 'background-position': '100% 50%' },
        '100%': { 'background-position': '0% 50%' },
      },
    },
    colors: {
      purple: '#362760',
      current: 'currentColor',
      yellow: '#E5A834',
      orange: '#DA7D2E',
      brown: '#572E2B',
      teal: '#C2D6D1',
      olive: '#808578',
      gray: '#C0CAC2',
      white: '#FFFFFF',
      error: '#A53533',
      success: '#5C874C',
    },
    extend: {
      backgroundImage: {
        'purple-gradient': 'linear-gradient(45deg, #362760, #8016a3, #5216a3)',
      },
    },
  },
  plugins: [],
};
