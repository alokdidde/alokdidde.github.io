import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { blog };
