/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    screens: {
      desktop: '1440px',
      laptop: '1024px',
      tablet: '768px',
      mobile: '360px',
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
}
