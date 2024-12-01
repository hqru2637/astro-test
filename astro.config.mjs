// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

import fulldev from 'fulldev-ui/integration';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(),
    sitemap(),
    icon(),
    fulldev({
      css: '/src/css/custom.css',
      colors: {
        theme: 'light',
        dark: {
          background: '#111110',
          base: '#6F6D66',
          brand: '#F50',
        },
        light: {
          background: '#EEEEEC',
          base: '#6F6D66',
          brand: '#F50',
        },
      },
    }),
  ],
});
