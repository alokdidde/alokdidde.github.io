// Interactive tools listed on /lab. Each tool is a component that can also be
// embedded in a post, so `relatedPost` points back to the writing behind it.
export const labTools = [
  {
    slug: "attention",
    title: "Build an attention mechanism",
    kind: "Transformers",
    summary:
      "Change the mask, share the key-value cache, then assemble choices across all seven parts of the attention design space.",
    tags: ["Attention", "Masks", "KV cache"],
    relatedPost: {
      title: "Attention is seven questions wearing one name",
      href: "/blog/attention-is-seven-questions-wearing-one-name",
    },
  },
] as const;
