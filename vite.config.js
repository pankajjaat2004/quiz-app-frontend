import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//  plugins: [react()],
//  root:'src',
//  server:{port:3000}
// })



export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
});
