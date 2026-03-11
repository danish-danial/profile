// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Space Mono",
      cssVariable: "--font-space-mono",
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
