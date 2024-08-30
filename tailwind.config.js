/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily:{
        poppins : ['Poppins', 'system-ui'],
        josefin : ['Josefin Sans', 'system-ui']
      },
      colors:{
        'tailflix-red' : '#BC1A45',
        'tailflix-melon' : '#FFD369',
        'tailflix-grey' : '#DDDDDD',
        'tailflix-white' : '#F7F7F7'
      },
    },
  },
  plugins: [],
}

