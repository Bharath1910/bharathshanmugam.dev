/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'background': '#12161c',
      'accent': '#3FFFB2',
      'complement': '#3EECFF',
      'pink': '#FF3D8B',
      'white': '#FFFFFF',
      'blue-dark': '#25becf',
    },
    extend: {
      fontFamily: {
        'satisfy': ['Satisfy', 'cursive'],
        'raleway': ['Raleway', 'Sans serif'],
        'poppins': ['Poppins', 'Sans serif']
      },
      aspectRatio: {
        'hero': '0.67 / 1'
    },
    },
  },
  plugins: [],
}

