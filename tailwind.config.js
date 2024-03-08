/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#597fd2',
        'blue': '#84a1de',
        'light-blue': '#1786de3b',
        "pink" : "#ff49db",
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Times New Roman', 'serif'],
    },
  },
  plugins: [],
};
