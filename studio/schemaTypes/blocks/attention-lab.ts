import { ComponentIcon } from "@sanity/icons/Component";
import { defineField, defineType } from "sanity";

export const attentionLab = defineType({
  name: "attentionLab",
  title: "Attention lab",
  type: "object",
  icon: ComponentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(90),
    }),
    defineField({
      name: "intro",
      title: "Introduction",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required().max(220),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "intro" },
  },
});
