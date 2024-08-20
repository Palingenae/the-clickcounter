import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { patchCssModules } from 'vite-css-modules';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'build'
        },
        plugins: [
            react(),
            patchCssModules()
        ],
        test: {
            environment: 'jsdom',
            globals: true,
            setupFiles: '/tests/setup.js'
        }
    }
})