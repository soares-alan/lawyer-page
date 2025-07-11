import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
    tailwindcss(),
  ],
  base: '/lawyer-page/', // repositório no GitHub
  server: {
    host: true,
    allowedHosts: ['508a-188-91-59-26.ngrok-free.app'] // ngrok hosts
  }
})