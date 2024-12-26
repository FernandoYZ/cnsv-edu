// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
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
        ]
    }
});