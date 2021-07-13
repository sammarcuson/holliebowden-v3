module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
        sans: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
        ],
        mono: [
            'Menlo',
            'Monaco',
            'Consolas',
            '"Liberation Mono"',
            '"Courier New"',
            'monospace',
        ],
        louizeDisplay: [
            'Louize-Display',
        ],
        louizeBold: [
            'Louize-Bold',
        ],
        karla: [
            'Karla',
        ],
    },

    extend: {
      colors: {
          offwhite: '#e0dfd6',
          black: '#302e29',
      },
      minWidth: {
        '52': '13rem',
      },
      maxWidth: {
        '52': '13rem',
      },

      fontSize: {
        '1xs': ['0.5rem', '0.75rem'],
      },
      screens: {
        'xs': '420px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [

  ],
}
