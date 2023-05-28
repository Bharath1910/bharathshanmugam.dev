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
            'pink': '#FF3D8B',
            'white': '#FFFFFF',
            'blue-dark': '#25becf',
        },
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
              },

            blur: {
                '4xl': '128px',
                '5xl': '460px',  
            },

            fontFamily: {
                'gloock': ['Gloock', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],

                'bebus': ['Bebus', 'sans-serif'],
                'montserrat': ['Montserrat', 'sans-serif'],

                'raleway': ['Raleway', 'sans-serif'],
                'oswald': ['Oswald', 'sans-serif'],

                'lobster': ['Lobster', 'sans-serif'],
                'dancing': ['Dancing Script', 'sans-serif'],
                'caveat': ['Caveat', 'sans-serif'],
                'satisfy': ['Satisfy', 'sans-serif'],

                'syne': ['Syne', 'sans-serif'],
            },

            aspectRatio: {
                'hero': '0.67 / 1'
            },

            spacing: {
                '128': '32rem',
            },

            fontSize: {
                'title': '5rem',
                'big': '200px',
            }
        },
    },
    plugins: [],
  }