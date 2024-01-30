import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/my-widget.js`,
        chunkFileNames: `assets/my-widget.js`,
        assetFileNames: `assets/my-widget.[ext]`
      }
    }
  }
})
