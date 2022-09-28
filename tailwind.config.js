/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js, ts}"
  ],
  theme: {
    fontFamily: {
      'sans': '"Source Sans Pro", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'serif': '"Source Serif Pro", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
    },
    extend: {
      // fontSize: {
      //   'huge': '300px',
      // }
    },
  },
  plugins: [],
}
