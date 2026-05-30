import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rathaus-oberaegeri.vercel.app',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
