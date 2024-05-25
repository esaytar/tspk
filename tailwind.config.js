/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './public/pages/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    borderRadius: {
      'leftCard': '1.43rem 0 0 1.43rem',
      'leftMobile': '0.71rem 0.71rem 0 0',
      'rightCard': '0 1.43rem 1.43rem 0',
      'rightMobile': '0 0 0.71rem 0.71rem'
    },
    fontSize: {
      '18': '1.125rem',
    },
    extend: {
      colors: {
        'mainGray': '#141414',
        'mainBlue': '#1763F4',
        'grayText': 'rgba(20, 20, 20, 0.8)',
        'grayMainText': '#434343',
      },
      gap: {
        '18': '1.125rem',
      },
      boxShadow: {
        'newShad': '4px 4px 10px 0 rgba(69, 129, 246, 0.15)',
      }
    },
  },
  plugins: [],
}

