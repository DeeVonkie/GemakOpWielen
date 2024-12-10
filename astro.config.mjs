import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from "@astrojs/alpinejs";
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  output: 'server',
  adapter: vercel(),
});