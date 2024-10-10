import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Contact-App/', // Your repository name goes here
  plugins: [react()],
});