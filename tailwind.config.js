/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#784beb",
      },
      fontFamily: {
        rbold: ["Ranade-Bold", "sans-serif"],
        rmedium: ["Ranade-Medium", "sans-serif"],
        rregular: ["Ranade-Regular", "sans-serif"],
        rlight: ["Ranade-Light", "sans-serif"]
      }
    }
  },
  plugins: []
};
