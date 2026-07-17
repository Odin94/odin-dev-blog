import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const site = "https://odin-matthias.de";

export default defineConfig({
  site,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Keep production bundles traceable without loading source maps at runtime.
      sourcemap: true,
      rollupOptions: {
        output: {
          // Inline scripts otherwise resolve map URLs relative to the current page.
          sourcemapBaseUrl: `${site}/`,
        },
      },
    },
  },
});
