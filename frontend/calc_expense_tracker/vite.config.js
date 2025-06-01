import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
 
   
  plugins: [react(),  tailwindcss()],
   server: {
    proxy: {
      '/api': 'http://localhost:8000',
    },
    build: {
    chunkSizeWarningLimit: 6000,
    
    // ... other build options
  },
  },
})
