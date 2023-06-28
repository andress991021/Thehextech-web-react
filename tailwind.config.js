/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        red:{
          DEFAULT:'#B31942' //Color bandera Usa
        },
        yellow:{
          DEFAULT:'#FFCD00', //Color bandera colombia
        }
        ,
        blue:{
          DEFAULT:'#003087', //Color bandera colombia
          900:'#0A3161'//Color bandera Usa
        }
      },
      backgroundImage:{
        'header':"url('/src/assets/Header.jpg')",
        'bannerWeb':"url('/src/assets/BannerWeb.jpg')",
        'bannerRa':"url('/src/assets/BannerRa.jpg')"
      }
    },
  },
  plugins: [],
}

