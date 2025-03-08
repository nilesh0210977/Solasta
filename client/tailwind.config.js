/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#0e0013 ",
        secondary: "#aaa6c3",
        tertiary: "#0a0220",
        "black-100": "#09021a",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      }
    },
  },
  plugins: [],
}

