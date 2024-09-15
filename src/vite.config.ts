// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Ensure this is set to 'jsdom'
    setupFiles: join(__dirname, 'src/setupTests.ts'), // Optional
  },
});
