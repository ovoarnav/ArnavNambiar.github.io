import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use relative asset paths so the site works when served from a repo subpath on GitHub Pages.
  base: './',
  plugins: [react()],
})
