import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const {
  PUBLIC_SANITY_PROJECT_ID = "f7bffmxv",
  PUBLIC_SANITY_DATASET = "production",
  SITE_URL = "https://alokdidde.github.io",
} = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");

export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "never",
  integrations: [
    mdx(),
    sitemap(),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
      wrap: true,
    },
  },
});
