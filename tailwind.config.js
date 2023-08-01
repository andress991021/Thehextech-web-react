/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        red:{
          DEFAULT:'#B31942' //Color Bandera Usa
        },
        yellow:{
          DEFAULT:'#FFCD00', //Color Bandera Colombia
        }
        ,
        blue:{
          DEFAULT:'#040E18', //Color Bandera Colombia
          900:'#00C4F4'//Color Bandera Usa
        },
        gray:{
          DEFAULT:'#020617',
          900:'#111827',
          400:'#3A3838'
        }
      },
      backgroundImage:{
        'header':"url('/src/assets/Header.jpg')",
        'bannerWeb':"url('/src/assets/BannerWeb.jpg')",
        'bannerRa':"url('/src/assets/BannerRa.jpg')",
        'Services3D':"url(/src/assets/Services3D/Fondo.jpg)",
        'ServicesWeb':"url(/src/assets/ServicesDeveloper/Fondo.jpg)" 
      }
    },
  },
  plugins: [],
}

