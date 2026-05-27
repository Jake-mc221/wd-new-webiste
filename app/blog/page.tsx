import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { getPosts, formatDate, stripHtml } from "@/lib/wordpress";

export default async function BlogPage() {
  const posts = await getPosts();

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
          <h1 className="font-serif text-[32px] md:text-[56px] font-normal text-white leading-[1.1] max-w-[580px] mb-5">
            Insights on <em>IP & Commercial Law</em>
          </h1>
          <p className="text-sm text-blue-300 max-w-[440px] leading-[1.75]">
            Practical articles and updates from our team of IP attorneys.
          </p>
        </div>
        <div className="border-t border-white/10 py-5">
          <p className="text-xs text-white/60 text-center tracking-[0.12em]">
            IP AND COMMERCIAL LAWYERS · SYDNEY CBD
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="bg-surface py-16">
        <div className="max-w-5xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-sm text-slate">No posts found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => {
                return (
                  <div
                    key={post.id}
                    className="group relative bg-white border border-line rounded-2xl overflow-hidden hover:shadow-lg hover:border-navy/20 transition-all duration-300 flex flex-col"
                  >
                    {/* stretched link overlay */}
                    <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={post.title.rendered} />
                    {/* colour accent bar */}
                    <div className="h-1 w-full bg-navy group-hover:bg-navy-light transition-colors duration-300" />
                    <div className="p-7 flex flex-col flex-1">
                      <p className="text-[10px] tracking-[0.18em] uppercase text-slate/50 font-semibold mb-4">{formatDate(post.date)}</p>
                      <h2
                        className="font-serif text-[22px] font-normal text-navy mb-4 leading-[1.3] group-hover:text-navy-light transition-colors"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                      <p className="text-sm text-slate leading-[1.75] line-clamp-4 flex-1">
                        {stripHtml(post.excerpt.rendered)}
                      </p>
                      <div className="flex items-center gap-2 mt-6 text-xs text-blue font-semibold">
                        Read more
                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
