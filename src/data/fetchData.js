import { NEWS, BLOG_POSTS, PASSENGERS } from "./siteData";

const API_URL = "https://api.garibookadmin.com/web/get/";

function youtubeIdFromUrl(url = "") {
  const m = url.match(/[?&]v=([\w-]{6,})/) || url.match(/youtu\.be\/([\w-]{6,})/);
  return m ? m[1] : null;
}

async function tryGet(path, timeoutMs = 6000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`${API_URL}${path}`, { signal: controller.signal });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json || !Array.isArray(json.data) || json.data.length === 0) return null;
    return json.data;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

function mapNews(item) {
  return {
    id: item.id,
    locale: item.language_type,
    title: item.title,
    url: item.url,
    date: (item.created_at || "").slice(0, 10),
    brand: "News",
    image: `https://garibookadmin.com/${item.image}`,
    brandImage: item.brand_image
      ? `https://garibookadmin.com/${item.brand_image}`
      : null,
  };
}

function mapBlog(item) {
  return {
    id: item.id,
    slug: item.slug_name,
    date: (item.created_at || "").slice(0, 10),
    title: item.title,
    subtitle: item.sub_title,
    image: item.blog_short_image
      ? `https://garibookadmin.com/${item.blog_short_image}`
      : "/assets/blog/blog-14.webp",
  };
}

/**
 * Loads live data from the Garibook public API with graceful fallback to
 * embedded defaults whenever the API is unreachable or returns bad data.
 * Returns { news, blogs, passengers }.
 */
export async function loadHomepageData() {
  const [liveNews, liveBlogs, livePassengers] = await Promise.all([
    tryGet("newsrooms"),
    tryGet("blogs"),
    tryGet("passenger-speaks"),
  ]);

  const news = liveNews && liveNews.length >= 3 ? liveNews.slice(0, 6).map(mapNews) : NEWS;

  const blogs =
    liveBlogs && liveBlogs.length >= 3
      ? liveBlogs.slice(-3).map(mapBlog).reverse()
      : BLOG_POSTS;

  const passengers =
    livePassengers && livePassengers.length >= 3
      ? livePassengers
          .filter((p) => p.url)
          .slice(0, 8)
          .map((p) => ({
            id: p.id,
            name: p.name,
            occupation: p.occupation,
            videoId: youtubeIdFromUrl(p.url),
          }))
          .filter((p) => p.videoId)
      : PASSENGERS.slides;

  return { news, blogs, passengers };
}