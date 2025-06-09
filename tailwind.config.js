/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
      },
    },
    fontFamly: {
      main:['DM Sans', 'sans-serif'],
      secondary: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}