import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import {federation} from '@module-federation/vite';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    legacy({
      targets: ['defaults'],
      renderLegacyChunks: true,
      renderModernChunks: false,
    }),
    federation({
      name: 'remote',
      manifest: true,
      exposes: {
        '.': './src/components/Button.tsx',
      },
      getPublicPath: 'return "http://localhost:8888/"',
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.2.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    port: 8888,
  },
  server: {
    port: 5000,
  },
});
