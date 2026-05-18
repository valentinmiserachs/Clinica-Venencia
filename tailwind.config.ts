/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: { 50: '#FAFAF5', 100: '#F5F5E6', 500: '#D4C3A3' },
        gold: { 500: '#B89762', 600: '#9A7B48' },
        dark: '#1A1A1A'
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}