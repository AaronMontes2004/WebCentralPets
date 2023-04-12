/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "lobster": ['Lobster', 'cursive'],
        "dosis": [ 'Dosis',"sans-serif"],
        "sans": ["Roboto", "sans-serif"],
        "body": ["Roboto", "sans-serif"],
        "mono": ["ui-monospace", "monospace"],
      },
      colors: {
        "overall": {
          "500": "#8881f5",
          "600": "#7167fb",
          "800": "#675cff",
          "900": "#574cfb"
        }
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}
