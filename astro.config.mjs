import { defineConfig } from "astro/config";
import icon from "astro-icon";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://airservitec.com",
  integrations: [icon(), react(), tailwind()]
});