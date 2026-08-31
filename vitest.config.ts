import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.spec.ts'],
    setupFiles: [resolve(import.meta.dirname, 'vitest.setup.ts')],
    testTimeout: 60 * 3 * 1000,
    hookTimeout: 60 * 3 * 1000,
  },
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  },
})
