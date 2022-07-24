import { defineConfig } from "astro/config";
import yaml from '@rollup/plugin-yaml';

export default defineConfig({

    siteName: "Chris Abani",
    site: 'https://www.budparr.com',
    build: {
        compact: true
    },
    markdown: {
        // Example: Include all drafts in your final build
        drafts: false,
    },
    vite: {
        plugins: [yaml()]
    }
});
