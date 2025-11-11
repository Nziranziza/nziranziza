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
        'sans': ['Inter', 'Raleway', ...defaultTheme.fontFamily.sans]
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 232, 176, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 232, 176, 0.4)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 40px rgba(59, 232, 176, 0.15)',
      }
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
