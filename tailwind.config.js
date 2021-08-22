const production = !process.env.ROLLUP_WATCH
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: production, // disable purge in dev
  },
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s infinite',
      },
      colors: {
        azap: {
          dark: '#16181a',
          DEFAULT: '#242729',
          light: '#313536',
        },
        gold: {
          light: '#fdd548',
          DEFAULT: '#c0b000',
        },
        maroon: {
          light: '#ae0e2e',
          DEFAULT: '#700020',
          200: '#800e2e',
        },
      },
    },
  },
}
