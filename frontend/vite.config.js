import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/ProtectedPages/Admin/$1'),
      },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Your backend server URL
        rejectUnauthorized: false 
      }
    }
  }
})
