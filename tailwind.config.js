const plugin = require('tailwindcss/plugin')


module.exports = {
  purge: [
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    
      colors: {
        transparent: "transparent",
        current: "currentColor",

        turqoise: {
          light: "#98d7d8",
          DEFAULT: "#00a5a8",
          dark: "#2d9da0",
        },
        grey: {
          darkest: "#444b59",
          dark: "#4c5464",
          DEFAULT: "#6e7783",
          light: "#767e8c",
          lightest: "#bbbec5",
        },
        brown: {
          DEFAULT: "#5F3F44",
          light: "#c0b494 ",
        },
      },
      
    },

    container: {
      center: true,
      padding: "2rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
};
