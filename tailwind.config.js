/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat'],
        Palanquin: ['Palanquin'],
        
      },
      colors:{
        Nblack:['#475569'],
        Gray:['#6D6D6D'],
        Orange:['#FF6452']
      },
      screens: {
        'max-sm': { 'max': '712px' },
        'BSM':{'max':'816px','min':'712px'},
        'meduim': {'min':'817px'} 
      },
      backgroundImage: {
        'hero': "url('/src/assets/Pictures/collection-background.svg')",
        'card': "url('/src/assets/Pictures/thumbnail-background.svg')",
      },
    },
  },
  plugins: [],
}