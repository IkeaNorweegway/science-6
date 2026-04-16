import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://ikeanorweegway.github.io',
  base: '/science-6-materials',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
