module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        asphalt: {
          light: '#303030',
          DEFAULT: '#202020',
          dark: '#101010',
          100: '#101010',
          150: '#151515',
          200: '#202020',
          250: '#252525',
          300: '#303030',
          350: '#353535',
          400: '#404040',
          450: '#454545',
          500: '#505050',
          550: '#555555',
          600: '#606060',
          650: '#656565',
          700: '#707070',
          750: '#757575',
          800: '#808080',
          850: '#858585',
          900: '#909090',
          950: '#959595',
        },
        azap: {
          dark: '#191a1a',
          DEFAULT: '#252629',
          light: '#313536',
          gold: '#c0b000', //fdd548
          //
          cyan: '#007070',
          purple: '#330070',
          pink: '#700070',
          red: '#700020' //ae3849
        },
        gold: {
          DEFAULT: '#c0b000'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

//  ToDo
