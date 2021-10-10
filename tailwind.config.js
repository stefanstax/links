module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      maxWidth: {
        lg: "1024px!important"
      }
    },
    extend: {}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
