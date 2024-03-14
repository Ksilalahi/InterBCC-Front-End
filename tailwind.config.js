/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": '#597fd2',
        "blue": '#84a1de',
        'light-blue': '#1786de3b',
        "dark-midnight-blue" : "#003266",
        "azure": '#027FFF',
        "light-silver": '#D9D9D9',
      },
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    }
  },
  plugins: [],
};
