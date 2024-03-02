const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#031F53',
      secondary: '#3BE8B0',
      light: '#E5E5E5',
      altprimary: '#102F68',
      black: '#000C00'
    },
    extend: {
      lineClamp: {
        9: '9',
      },
      fontFamily:{
        'sans': ['Raleway', ...defaultTheme.fontFamily.sans]
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
