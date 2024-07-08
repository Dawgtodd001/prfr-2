import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'packages/app',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'packages/app/public/index.html',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
