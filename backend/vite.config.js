import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'frontend/calc_expense_tracker/src/main.js'), // Replace with your actual entry point
    },
    manifest: true, // Generates manifest.json for backend integration
  },
});