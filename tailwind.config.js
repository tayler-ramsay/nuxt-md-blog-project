/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    container: false
  },
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      fontFamily: {
        sans: ['inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        black: '#242B34',
        green: '#B2D237',
        slate: '#3E4A59',
        blue: {
          light: '#009CDA',
          default: '#014180'
        }
      },
      fontSize: {
        '7xl': '5rem'
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/3': '33.333%',
        '1/2': '50%',
        '3/4': '100%'
      },
      maxWidth: {
        '0': '0',
        '1/4': '25%',
        '1/3': '33.333%',
        '1/2': '50%',
        '3/4': '100%'
      }
    }
  },
  variants: {
    borderWidth: ['hover'],
    padding: ['even', 'odd', 'responsive']
  },
  plugins: []
}
