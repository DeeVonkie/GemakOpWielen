import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from "@astrojs/alpinejs";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone'
  })
});