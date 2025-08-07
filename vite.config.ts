// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/goolix-live/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
