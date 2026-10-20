import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep the large decorative SVGs as separate files instead of inlining them.
    assetsInlineLimit: 2048,
  },
})
