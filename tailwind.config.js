/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'background': '#12161c',
            'accent': '#3FFFB2',
            'complement': '#3EECFF',
            'white': '#FFFFFF'
        },
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
              },

            blur: {
                '4xl': '128px',
            },

            fontFamily: {
                'gloock': ['Gloock', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
            },

            aspectRatio: {
                'hero': '0.67 / 1'
            }
        },
    },
    plugins: [],
  }