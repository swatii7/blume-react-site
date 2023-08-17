import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // ...other configuration options...
  optimizeDeps: {
    include: ['dependency-to-include'],
    exclude: ['dependency-to-exclude'],
  },
  plugins: [react()],
});

// // vite.config.js
// module.exports = {
//   optimizeDeps: {
//     include: ['dependency-to-include'],
//     exclude: ['dependency-to-exclude'],
//   },
//   // Other configuration settings...
// };
