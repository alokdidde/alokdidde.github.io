import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { getCliClient } from "sanity/cli";

type PortableBlock = Record<string, unknown>;

let blockNumber = 0;
let customNumber = 0;

function textBlock(style: "normal" | "h2" | "h3", text: string): PortableBlock {
  blockNumber += 1;
  const key = `b${String(blockNumber).padStart(3, "0")}`;

  return {
    _type: "block",
    _key: key,
    style,
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `${key}s1`,
        text: text.replaceAll("`", ""),
        marks: [],
      },
    ],
  };
}

function attributes(source: string) {
  return Object.fromEntries(
    [...source.matchAll(/([a-zA-Z]+)="([^"]*)"/g)].map((match) => [
      match[1],
      match[2],
    ]),
  );
}

function parseBody(mdx: string): PortableBlock[] {
  const frontmatterEnd = mdx.indexOf("---", 3);
  const lines = mdx.slice(frontmatterEnd + 3).split("\n");
  const body: PortableBlock[] = [];
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    body.push(textBlock("normal", paragraph.join(" ").trim()));
    paragraph = [];
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();

    if (!line) {
      flushParagraph();
      continue;
    }

    if (line.startsWith("import ")) continue;

    if (line.startsWith("<SourceCard") || line.startsWith("<AttentionLab")) {
      flushParagraph();
      const parts = [line];
      while (!parts.at(-1)?.endsWith("/>") && index + 1 < lines.length) {
        index += 1;
        parts.push(lines[index].trim());
      }

      customNumber += 1;
      const source = parts.join(" ");
      const props = attributes(source);
      const key = `custom-${String(customNumber).padStart(3, "0")}`;

      if (source.startsWith("<SourceCard")) {
        body.push({
          _type: "sourceCard",
          _key: key,
          mediaType: props.mediaType,
          publisher: props.publisher,
          title: props.title,
          url: props.url,
          note: props.note,
        });
      } else {
        body.push({
          _type: "attentionLab",
          _key: key,
          title: props.title,
          intro: props.intro,
        });
      }
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      body.push(textBlock("h3", line.slice(4)));
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      body.push(textBlock("h2", line.slice(3)));
      continue;
    }

    const numbered = line.match(/^\d+\.\s+(.+)$/);
    if (numbered) {
      flushParagraph();
      body.push({ ...textBlock("normal", numbered[1]), listItem: "number", level: 1 });
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  return body;
}

const articlePath = fileURLToPath(
  new URL(
    "../../web/src/content/blog/attention-is-seven-questions-wearing-one-name.mdx",
    import.meta.url,
  ),
);
const body = parseBody(await readFile(articlePath, "utf8"));
const slug = "attention-is-seven-questions-wearing-one-name";
const fields = {
  title: "Attention is seven questions wearing one name",
  slug: { _type: "slug", current: slug },
  summary:
    "Causal attention, GQA, FlashAttention and RoPE answer different questions. Seven categories show which part each one changes.",
  publishedAt: "2026-09-01T12:00:00.000Z",
  tags: ["attention", "transformers", "llms", "machine-learning", "explainers"],
  body,
};

const client = getCliClient({ apiVersion: "2026-08-01" });
const existing = await client.fetch<{ _id: string } | null>(
  `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0]{_id}`,
  { slug },
);

if (existing?._id) {
  await client.patch(existing._id).set(fields).commit();
  console.log(`Updated published post ${existing._id} with ${body.length} body blocks`);
} else {
  const created = await client.create({ _type: "post", ...fields });
  console.log(`Created published post ${created._id} with ${body.length} body blocks`);
}
