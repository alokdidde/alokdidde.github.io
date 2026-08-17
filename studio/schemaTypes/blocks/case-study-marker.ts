import { TimelineIcon } from "@sanity/icons/Timeline";
import { defineField, defineType } from "sanity";

export const caseStudyMarker = defineType({
  name: "caseStudyMarker",
  title: "Case study marker",
  type: "object",
  icon: TimelineIcon,
  fields: [
    defineField({
      name: "topic",
      title: "Topic",
      type: "string",
      options: {
        list: [
          { title: "Self-driving", value: "autonomy" },
          { title: "Hyperloop", value: "hyperloop" },
          { title: "Tunnels", value: "tunnels" },
          { title: "AI and robots", value: "robotics" },
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
      name: "promise",
      title: "The promise",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: "reality",
      title: "What arrived",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required().max(220),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "topic" },
    prepare({ title, subtitle }) {
      return { title, subtitle: `Case study · ${subtitle}` };
    },
  },
});
