/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 2rem))' }
        },
        marquee2: {
          '0%': { transform: 'translateX(calc(100% + 2rem))' },
          '100%': { transform: 'translateX(0)' }
        },
      },
    },
  },
  plugins: [],
}