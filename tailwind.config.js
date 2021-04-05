const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    //require('@tailwindcss/aspect-ratio'),
    //require('@tailwindcss/line-clamp'),
    require('tailwindcss-question-mark'),
  ],
};
