/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],

  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },

    extend: {
      screens: {
        xs: '420px',

        mob: '375px',
      },

      colors: {
        my_dark_cyan: 'hsl(158, 36%, 37%)',
        my_darkest_cyan: 'hsl(158, 36%, 27%)',
        my_Cream: 'hsl(30, 38%, 92%)',

        my_very_dark_blue: 'hsl(212, 21%, 14%)',
        my_dark_grayish_blue: 'hsl(228, 12%, 48%)',
        my_white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
