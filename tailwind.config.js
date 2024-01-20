module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#031F53',
      secondary: '#3BE8B0',
      light: '#E5E5E5',
      altprimary: '#102F68'
    },
    extend: {
      lineClamp: {
        9: '9',
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
