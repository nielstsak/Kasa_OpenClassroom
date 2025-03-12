import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/tests/setupTest.js'],
    include: ['src/tests/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [
        'src/main.jsx',
        'eslint.config.js',
        'src/pages/**',
        'vite.config.js',
        'src/layouts/**',
        'src/router/**'
      ]
    }
  }
})
