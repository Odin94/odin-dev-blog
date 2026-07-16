import { posts } from "@/lib/posts";

const baseUrl = "https://odin-matthias.de";

export function GET() {
  const latestPostDate = posts.reduce(
    (latest, post) => (post.date > latest ? post.date : latest),
    posts[0]?.date ?? "",
  );
  const articleEntries = posts
    .map(
      (post) => `  <url>
    <loc>${baseUrl}/articles/${post.slug}/</loc>
    <lastmod>${post.date.slice(0, 10)}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog/</loc>
    ${latestPostDate ? `<lastmod>${latestPostDate.slice(0, 10)}</lastmod>` : ""}
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
${articleEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
