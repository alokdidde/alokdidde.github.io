import rss from "@astrojs/rss";
import { site } from "../data/site";
import { getPosts } from "../lib/posts";

export async function GET(context) {
  const posts = await getPosts();

  return rss({
    title: `${site.name} — Field notes`,
    description: "Writing about robotics, engineering, AI, and building in the open.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.summary,
      pubDate: new Date(post.publishedAt),
      link: `/blog/${post.slug}`,
      categories: post.tags,
    })),
  });
}
