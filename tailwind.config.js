/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg : '1150px',
        xl : '1150px',
        '2xl' : '1150px'
      },
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

