module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      letterSpacing: {
        extrawidest: '0.4em',
      },
      colors: {
        primary: {
          darkcyan: 'hsl(158, 36%, 37%)',
          cream: 'hsl(30, 38%, 92%)',
          verydarkblue: 'hsl(212, 21%, 14%)',
          darkgreyishblue: 'hsl(228, 12%, 48%)',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
