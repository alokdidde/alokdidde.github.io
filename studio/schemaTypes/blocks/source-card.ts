import { LinkIcon } from "@sanity/icons/Link";
import { defineField, defineType } from "sanity";

export const sourceCard = defineType({
  name: "sourceCard",
  title: "Source card",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "mediaType",
      title: "Format",
      type: "string",
      options: {
        list: [
          { title: "Video", value: "video" },
          { title: "Article", value: "article" },
          { title: "Document", value: "document" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "publisher",
      title: "Publisher",
      type: "string",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) =>
        rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "note",
      title: "Why it matters",
      type: "text",
      rows: 2,
      validation: (rule) => rule.required().max(220),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "publisher" },
  },
});
