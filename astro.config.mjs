import { defineConfig } from 'astro/config';
/* import react from '@astrojs/react'; */
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    /* react({
      experimentalReactChildren: true,
    }), */
  ],
  buildOptions: {
    baseUrl: '/', // Set your desired base URL for deployment
  },
});
