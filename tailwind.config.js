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
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
        fadeInSlow: "fadeIn 1s ease-in forwards",
        fadeOut: "fadeOut 0.5s ease-in forwards"
      },
      keyframes: {
        'fadeIn': {
          'from': {
            opacity: '0'
          },
          'to': {
            opacity: '1'
          },
        },
        'fadeOut': {
          'from': {
            opacity: '1'
          },
          'to': {
            opacity: '0'
          },
        }
      },
      colors: {
          offwhite: '#e0dfd6',
          black: '#302e29',
          lightblack: '#4a4741',
      },
      minWidth: {
        '52': '13rem',
      },
      maxWidth: {
        '52': '13rem',
      },
      maxHeight: {
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
      height: {
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
      fontSize: {
        '1xs': ['0.5rem', '0.75rem'],
      },
      screens: {
        'xs': '420px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      inset: {
        '1/10': '10%',
      }
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"]
    },
  },
  plugins: [

  ],
  purge: {
    content: [
      './resources/views/**/*.html',
      './resources/js/**/*.js',
    ],
    safelist: [
      'object-center',
      'object-top',
      'object-left-top',
      'object-left',
      'object-left-bottom',
      'object-bottom',
      'object-right-bottom',
      'object-right',
      'object-right-top',
      'md:object-center',
      'md:object-top',
      'md:object-left-top',
      'md:object-left',
      'md:object-left-bottom',
      'md:object-bottom',
      'md:object-right-bottom',
      'md:object-right',
      'md:object-right-top',
      'lg:object-center',
      'lg:object-top',
      'lg:object-left-top',
      'lg:object-left',
      'lg:object-left-bottom',
      'lg:object-bottom',
      'lg:object-right-bottom',
      'lg:object-right',
      'lg:object-right-top',
      'opacity-10',
      'opacity-20',
      'opacity-30',
      'opacity-40',
      'opacity-50',
      'opacity-60',
      'opacity-70',
      'opacity-80',
      'opacity-90',
      'md:opacity-10',
      'md:opacity-20',
      'md:opacity-30',
      'md:opacity-40',
      'md:opacity-50',
      'md:opacity-60',
      'md:opacity-70',
      'md:opacity-80',
      'md:opacity-90',
      'lg:opacity-10',
      'lg:opacity-20',
      'lg:opacity-30',
      'lg:opacity-40',
      'lg:opacity-50',
      'lg:opacity-60',
      'lg:opacity-70',
      'lg:opacity-80',
      'lg:opacity-90',
    ],
    layers: ['components', 'utilities'],
  },
}

