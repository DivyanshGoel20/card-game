import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  // Ensure we're using ESM
  build: {
    target: 'esnext',
    modulePreload: true
  }
})
