import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "f7bffmxv";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "alokdidde-blog",
  title: "Alok Didde — Blog",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
