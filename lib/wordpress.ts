const WP_API = "https://www.wallington-dummer.com/wp-json/wp/v2";

export type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
    author?: Array<{ name: string }>;
  };
};

async function parseJSON<T>(res: Response): Promise<T | null> {
  const text = await res.text();
  const start = text.indexOf("[") !== -1
    ? Math.min(text.indexOf("["), text.indexOf("{") === -1 ? Infinity : text.indexOf("{"))
    : text.indexOf("{");
  if (start === -1) return null;
  try {
    return JSON.parse(text.slice(start)) as T;
  } catch {
    return null;
  }
}

export async function getPosts(perPage = 100): Promise<WPPost[]> {
  try {
    const res = await fetch(`${WP_API}/posts?_embed&per_page=${perPage}&status=publish`);
    if (!res.ok) return [];
    return (await parseJSON<WPPost[]>(res)) ?? [];
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed`);
    if (!res.ok) return null;
    const posts = await parseJSON<WPPost[]>(res);
    return posts?.[0] ?? null;
  } catch {
    return null;
  }
}

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\[&hellip;\]|\[…\]/g, "…").trim();
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}
