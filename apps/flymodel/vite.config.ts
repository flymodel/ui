/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/flymodel',

  server: {
    port: 3000,
    host: 'localhost',
    proxy: {
      '/graphql': {
        target: 'http://127.0.0.1:9009',
      },
      '^/graphql': {
        target: 'ws://127.0.0.1:9009/graphql',
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
