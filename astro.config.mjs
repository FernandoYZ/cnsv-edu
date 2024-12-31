// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://FernandoYZ.github.io/',
    base: '/cnsv-edu/',
    integrations: [tailwind()],
    output: 'static',
    compressHTML: true,
    build: {
        inlineStylesheets: 'auto'
    },
    vite: {
        build: {
            cssMinify: true,
            minify: 'terser',
            cssCodeSplit: false,
            terserOptions: {
                compress: {
                    drop_console: true,
                    passes: 2
                },
                mangle: true
            },
            rollupOptions: {
                output: {}
            }
        },
        plugins: [
            {
                name: 'gzip',
                apply: 'build',
                enforce: 'post'
            }
        ]
    }
});