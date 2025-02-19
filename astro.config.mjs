// @ts-check

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://cnsv-edu.vercel.app/',
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.8
    })
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true,
      cssCodeSplit: false,
    }
  }
});
