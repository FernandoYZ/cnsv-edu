// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
    site: 'https://cnsv-edu.vercel.app/',
    integrations: [tailwind(), sitemap({
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date(),
    })],
    output: 'static',
    compressHTML: true,
    build: {
        inlineStylesheets: 'auto'
    },
    vite: {
        build: {
            cssMinify: true,
            minify: 'terser',
            cssCodeSplit: true,
            terserOptions: {
                compress: {
                    drop_console: false,
                    passes: 1
                },
                mangle: false
            },
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return 'vendor';
                        }
                        if (id.includes('ui-library')) {
                            return 'ui';
                        }
                    }
                }
            }
        },
        plugins: [
            {
                name: 'gzip',
                apply: 'build',
                enforce: 'post'
            }
        ],
        server: {
            hmr: {
                overlay: false
            }
        }
    },
});