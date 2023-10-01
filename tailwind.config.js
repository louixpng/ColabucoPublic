/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        yellow: '#ffff00',
      },
      
      fontFamily: {
        'montserrat_alt': ['Montserrat Alternates', 'sans-serif'],
        'montserrat_alt_medium': ['Montserrat Alternates Medium', 'sans-serif'],
        'montserrat_alt_semibold': ['Montserrat Alternates SemiBold', 'sans-serif'],
      },

      placeholderColor: {
        'primary': '#9E9E9E',
      },
      
    },
      
  },
  plugins: [],

}
