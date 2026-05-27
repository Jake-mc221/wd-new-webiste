import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Footer from "@/components/footer";
import { getPosts, getPostBySlug, formatDate } from "@/lib/wordpress";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const author = post._embedded?.author?.[0]?.name;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-navy relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-[38%] bg-white/[0.04]"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="max-w-5xl mx-auto px-6 pt-[100px] md:pt-[128px] pb-16 relative">
          <p className="text-xs tracking-[0.18em] uppercase text-blue-300 font-semibold mb-4">
            Blog
          </p>
          <h1
            className="font-serif text-[28px] md:text-[48px] font-normal text-white leading-[1.15] max-w-[720px] mb-5"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className="flex items-center gap-3 text-sm text-blue-300">
            <span>{formatDate(post.date)}</span>
            {author && (
              <>
                <span className="text-white/20">·</span>
                <span>{author}</span>
              </>
            )}
          </div>
        </div>
        <div className="border-t border-white/10 py-5">
          <p className="text-xs text-white/60 text-center tracking-[0.12em]">
            IP AND COMMERCIAL LAWYERS · SYDNEY CBD
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          {image && (
            <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9]">
              <img
                src={image}
                alt={post.title.rendered}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div
            className="wp-content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </section>

      <div className="bg-navy/95 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/blog" className="text-sm text-blue-300 font-medium hover:text-white transition-colors">
            ← All Posts
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
