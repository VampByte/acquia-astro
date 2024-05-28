import { defineConfig } from 'astro/config';
/* import react from '@astrojs/react'; */
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  /* base: '/prod/', // Cambia esto a tu subdirectorio */
  integrations: [
    tailwind(),
    /* react({
      experimentalReactChildren: true,
    }), */
  ],
  /* buildOptions: {
    baseUrl: '/', // Set your desired base URL for deployment
  }, */
});
