import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  outDir: 'docs',
  site: 'https://atxy2k.github.io',
  base: 'arq-jose',
  build: {
    assets: 'assets'
  }
});