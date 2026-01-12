// @ts-check
import { defineConfig } from "astro/config";
import deno from "@deno/astro-adapter";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
