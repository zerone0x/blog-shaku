import { defineConfig } from 'astro/config';
import { remarkShakuCodeAnnotate } from 'remark-shaku-code-annotate';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  markdown: {
    remarkPlugins: [
      [
        remarkShakuCodeAnnotate,
        {
          themes: ['github-light', 'github-dark'],
        },
      ],
    ],
  },
  integrations: [mdx(), sitemap()],
});
