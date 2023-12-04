/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import path from 'path';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/flymodel',

  server: {
    port: 3000,
    host: 'localhost',
    proxy: {
      '/graphql': {
        target: 'http://localhost:9000/graphql',
      },
      '^/graphql': {
        target: 'ws://localhost:9000/graphql',
        ws: true,
      },
    },
    cors: true,
    fs: {
      allow: ['../../node_modules/.pnpm'],
    },
  },

  preview: {
    port: 4200,
    host: 'localhost',
  },

  css: {
    postcss: {
      plugins: [
        require('tailwindcss')({
          config: path.join(__dirname, './tailwind.config.js'),
        }),
        require('autoprefixer'),
      ],
    },
  },

  plugins: [react(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
