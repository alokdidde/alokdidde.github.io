// Interactive tools listed on /lab. Each tool is a component that can also be
// embedded in a post; its page pairs the tool with a short field guide.
export const labTools = [
  {
    slug: "attention",
    title: "Attention is seven questions wearing one name",
    kind: "Transformers",
    summary:
      "Change the mask, share the key-value cache, then assemble a mechanism from seven design choices. Causal attention, GQA, FlashAttention and RoPE each answer a different one.",
    tags: ["Attention", "Masks", "KV cache", "RoPE"],
  },
  {
    slug: "encoders",
    title: "Inside a text encoder",
    kind: "Encoders",
    summary:
      "Follow a sentence from token lookup, through attention that reads both ways, to one pooled vector you can compare with cosine similarity.",
    tags: ["Embeddings", "Bidirectional", "Pooling", "Similarity"],
  },
] as const;

// Posts that now live in the Lab. They are left out of Writing and their old
// URLs redirect to the tool page.
export const movedToLab: Record<string, string> = {
  "attention-is-seven-questions-wearing-one-name": "/lab/attention",
};
