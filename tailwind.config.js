/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        red:{
          DEFAULT:'#B88378'
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

