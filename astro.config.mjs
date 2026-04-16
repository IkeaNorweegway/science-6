import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://classroom-tools.netlify.app',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
