const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'sans': ['Mulish', 'sans-serif', 'ui-sans-serif', 'system-ui'],
        'serif': ['Mulish', 'ui-serif', 'Georgia'],
        'arial': ['Arial', 'Mulish', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        'sm': '1.2rem',
        'jumbo': '13.5rem',
        'extra-big': '9.5rem',
        'big': '7.5rem',
      },
      colors: {
        'rlc-gray-800': '#013878',
        'rlc-black': '#282828',
        'rlc-cyan': '#06EFFE',
        'rlc-cyan-500': '#41C4FF',
        'rlc-blue-500': '#2982CC',
        'rlc-blue': '#013878',
        'rlc-gray': '#D3D3D3',
        'rlc-red': '#D01417',
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: '3.6rem', fontWeight: 400},
        'h2': { fontSize: '3.5rem', fontWeight: 600},
        'h3': { fontSize:  '3rem', fontWeight: 600},
        'h4': { fontSize: '1.8rem', fontWeight: 600 },
        'h5': { fontSize: '1.6rem', fontWeight: 600 },
        'h6': { fontSize: '1.2rem', fontWeight: 600 },
        'small': { fontSize: '1.2rem', fontWeight: 400 },
      })
    })
  ],
}