/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--karla-font)', 'sans-serif'],
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
      backgroundImage: {
        'purple-gradient': 'linear-gradient(45deg, #362760, #8016a3, #5216a3)',
      },
    },
  },
  plugins: [],
};
