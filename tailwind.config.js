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
        "green": '#72F977',
        "royal-orange": '#FF9548',
        "pastel-red": '#FF6767',
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
    },
  },
  plugins: [],
};
