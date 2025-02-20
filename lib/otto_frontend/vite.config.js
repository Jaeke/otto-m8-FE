import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // Root alias
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: "\n          @use \"@/styles/variables\" as *;\n          @use \"@/styles/mixins\" as *;\n          @use \"@/styles/breakpoints\" as *;\n          @use \"@/styles/themes\" as *;\n        ",
            },
        },
    },
    server: {
        port: 5173,
    },
});
