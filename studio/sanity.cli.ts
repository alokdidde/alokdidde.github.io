import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "f7bffmxv",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  typegen: {
    enabled: true,
    path: "../web/src/**/*.{ts,tsx,js,jsx,astro}",
    schema: "schema.json",
    generates: "../web/sanity.types.ts",
    overloadClientMethods: true,
  },
});
