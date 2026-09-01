import { ComponentIcon } from "@sanity/icons/Component";
import { defineField, defineType } from "sanity";

export const systemStage = defineType({
  name: "systemStage",
  title: "System stage",
  type: "object",
  icon: ComponentIcon,
  fields: [
    defineField({
      name: "stage",
      title: "Stage",
      type: "string",
      options: {
        list: [
          { title: "Map", value: "mapping" },
          { title: "Mark", value: "recognition" },
          { title: "Retrieve", value: "retrieval" },
          { title: "Move", value: "navigation" },
          { title: "Bound", value: "specification" },
          { title: "Route", value: "routing" },
          { title: "Verify", value: "verification" },
          { title: "Promote", value: "promotion" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "number",
      title: "Sequence number",
      type: "string",
      validation: (rule) => rule.required().max(4),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(90),
    }),
    defineField({
      name: "input",
      title: "What goes in",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "output",
      title: "What stays",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required().max(220),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "stage" },
    prepare({ title, subtitle }) {
      return { title, subtitle: `System stage · ${subtitle}` };
    },
  },
});
