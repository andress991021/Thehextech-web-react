import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //host: '192.168.5.107',
    host: '192.168.1.105',
    port: 3000
  }
})

