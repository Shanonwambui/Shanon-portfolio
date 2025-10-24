/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#A78BFA",
        secondary: "#EC4899",
        tertiary: "#111827",
        text: "#FAFAFA",
        blue: "#3B82F6"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        button: "0px 15px 35px -5px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};