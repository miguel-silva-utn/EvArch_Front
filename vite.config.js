import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // acepta conexiones externas
    port: 5173,
    strictPort: true,
    allowedHosts: 'all' // permite cualquier dominio, incluido Ngrok
  }
})
