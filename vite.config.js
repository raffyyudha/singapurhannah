import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Ambil semua file .html di root directory
const htmlFiles = fs.readdirSync(__dirname)
    .filter(file => file.endsWith('.html'))
    .reduce((acc, file) => {
        const name = file.replace('.html', '');
        acc[name] = resolve(__dirname, file);
        return acc;
    }, {});

export default defineConfig({
    build: {
        rollupOptions: {
            input: htmlFiles,
        },
    },
});
