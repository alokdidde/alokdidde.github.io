import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { getCollection, type CollectionEntry } from "astro:content";
import { defineQuery } from "groq";
import { sanityClient } from "sanity:client";

export type BlogPost = {
  source: "local" | "sanity";
  id: string;
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  updatedAt?: string;
  imageUrl?: string;
  imageAlt?: string;
  tags: string[];
  body?: unknown[];
};

export const sanityConfigured = true;

const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageSource) {
  return imageBuilder.image(source);
}

const BLOG_POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    defined(publishedAt) &&
    publishedAt <= now()
  ] | order(publishedAt desc) {
    "id": _id,
    "slug": slug.current,
    title,
    summary,
    publishedAt,
    updatedAt,
    mainImage,
    tags,
    body[]{
      ...,
      _type == "image" => {
        "dimensions": asset->metadata.dimensions
      }
    }
  }
`);

function slugFromEntry(entry: CollectionEntry<"blog">) {
  return entry.id.replace(/\.(md|mdx)$/i, "");
}

async function getLocalPosts(): Promise<BlogPost[]> {
  const entries = await getCollection("blog", ({ data }) => !data.draft);

  return entries
    .map((entry) => ({
      source: "local" as const,
      id: entry.id,
      slug: slugFromEntry(entry),
      title: entry.data.title,
      summary: entry.data.summary,
      publishedAt: entry.data.publishedAt.toISOString(),
      updatedAt: entry.data.updatedAt?.toISOString(),
      imageUrl: entry.data.image?.src,
      imageAlt: entry.data.imageAlt,
      tags: entry.data.tags,
    }))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const posts = await sanityClient.fetch(BLOG_POSTS_QUERY);

    if (posts.length > 0) {
      return posts.map((post) => ({
        source: "sanity",
        id: post.id,
        slug: post.slug,
        title: post.title,
        summary: post.summary,
        publishedAt: post.publishedAt,
        updatedAt: post.updatedAt ?? undefined,
        imageUrl: post.mainImage
          ? urlForImage(post.mainImage)
              .width(1600)
              .fit("max")
              .auto("format")
              .quality(86)
              .url()
          : undefined,
        imageAlt: post.mainImage?.alt,
        tags: post.tags ?? [],
        body: post.body ?? [],
      }));
    }
  } catch (error) {
    console.warn("Sanity content could not be loaded; using local posts.", error);
  }

  return getLocalPosts();
}

export async function getLocalEntry(id: string) {
  const entries = await getCollection("blog");
  return entries.find((entry) => entry.id === id);
}
