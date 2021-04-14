const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './public/**/*.html',
    './components/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      cyan: colors.cyan
    },
    fontFamily:{
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans'],
      'alice':[ 'Alice' ],
      'fira': [ 'Fira Sans' ]
    }
  },
}