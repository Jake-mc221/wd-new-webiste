import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { team } from "@/app/firm/data";
import Footer from "@/components/footer";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return team.map((p) => ({ slug: p.slug }));
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = team.find((p) => p.slug === slug);
  if (!person) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-navy">
        <div className="max-w-5xl mx-auto px-6 pt-[88px] pb-0">
          <div className="grid grid-cols-[2fr_3fr] gap-10 items-end">

            {/* Photo */}
            <div className="aspect-[3/4] bg-navy-light rounded-t-xl overflow-hidden relative">
              <img
                src={asset(person.photo)}
                alt={person.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>

            {/* Details */}
            <div className="pb-12 pt-8">
              <p className="text-xs tracking-[0.18em] uppercase text-blue-300 font-semibold mb-3">
                {person.title}
              </p>
              <div className="flex items-baseline gap-3 mb-1">
                <h1 className="font-serif text-[42px] font-normal text-white leading-tight">
                  {person.name}
                </h1>
                <span className="text-blue-300 text-sm font-medium shrink-0">
                  {person.credentials}
                </span>
              </div>
              <p className="text-base text-white/70 mb-1">{person.role}</p>
              <p className="text-sm text-white/50 mb-6">
                Wallington Dummer · {person.location}
              </p>

              <div className="space-y-1.5 mb-8">
                <p className="text-sm text-white/60">
                  <span className="text-white/40 w-14 inline-block">Phone</span>
                  {person.phone}
                </p>
                <p className="text-sm text-white/60">
                  <span className="text-white/40 w-14 inline-block">Email</span>
                  <a
                    href={`mailto:${person.email}`}
                    className="text-blue-300 hover:text-white transition-colors"
                  >
                    {person.email}
                  </a>
                </p>
                {person.linkedin && (
                  <p className="text-sm text-white/60 flex items-center gap-2">
                    <span className="text-white/40 w-14 inline-block">LinkedIn</span>
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                      View on LinkedIn
                    </a>
                  </p>
                )}
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-[10px] tracking-[0.18em] uppercase text-white/40 font-semibold mb-3">
                  Areas of Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {person.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-blue-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="bg-surface py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-lg font-semibold text-navy leading-[1.7] mb-8 max-w-3xl">
            {person.leadBio}
          </p>
          <div className="space-y-5 max-w-3xl">
            {person.bio.map((para, i) => (
              <p key={i} className="text-sm text-slate leading-[1.85]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS & MEMBERSHIPS */}
      <section className="bg-white border-t border-line py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-14">

          <div>
            <div className="grid grid-cols-[200px_1fr] gap-8 items-start">
              <h3 className="text-base font-semibold text-navy pt-1">Qualifications</h3>
              <div className="space-y-3">
                {person.qualifications.map((q) => (
                  <p key={q} className="text-sm text-slate leading-[1.7]">{q}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-line pt-14">
            <div className="grid grid-cols-[200px_1fr] gap-8 items-start">
              <h3 className="text-base font-semibold text-navy pt-1">Memberships</h3>
              <div className="space-y-3">
                {person.memberships.map((m) => (
                  <p key={m} className="text-sm text-slate leading-[1.7]">{m}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="bg-navy/95 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/firm" className="text-sm text-blue-300 font-medium hover:text-white transition-colors">
            ← Back to Our Firm
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
