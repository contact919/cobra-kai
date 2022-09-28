import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: 'http://localhost:3006',
    host: true,
    port: 3006
  }
})
