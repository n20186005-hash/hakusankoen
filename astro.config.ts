import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hakusankoen.com',
  output: 'static',
  integrations: [sitemap({
    filter: (page) => !['/404/', '/credits/', '/privacy/'].includes(new URL(page).pathname),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
