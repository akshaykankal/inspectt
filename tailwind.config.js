module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@zach.codes/react-calendar/dist/**/*.js"
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      'rock-salt': ['"Rock Salt"', 'cursive'],
      'roboto': ['Roboto', 'sans-serif'], 
      'brand':['Montserrat', 'sans-serif']
      // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      fontFamily: {
        'lato': ['lato', 'sans-serif']
      },
      colors: {
        brand: {
          BACKGROUND: "#ccdbff",
          DEFAULT: "#0D0D2B",
          icon: "0371E9",
          button: "fffa91",
          learn: "#5aa897",
          pushLimit: "#064420",
          heart: "ff0000"
        },
      },
    },
  },
  variants: {
    extend: {
      boxSizing: ['hover', 'focus'],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],


};
