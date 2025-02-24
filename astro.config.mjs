import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from "@astrojs/alpinejs";

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  output: 'server',
  adapter: netlify(),
  env: {
    schema: {
      SMTP_HOST: envField.string({
        context: 'server',
        access: 'secret'
      }),
      SMTP_PORT: envField.number({
        context: 'server',
        access: 'secret'
      }),
      SMTP_SECURE: envField.boolean({
        context: 'server',
        access: 'secret'
      }),
      SMTP_USER: envField.string({
        context: 'server',
        access: 'secret'
      }),
      SMTP_PASSWORD: envField.string({
        context: 'server',
        access: 'secret'
      }),
    },
  }
});