import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:"192.168.1.169",
    port:3000
  },
  plugins: [react()],
})
