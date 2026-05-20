import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { services } from "@/app/services/data";
import Footer from "@/components/footer";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={asset(service.image)}
            alt={service.name}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-[100px] md:pt-[128px] pb-16 relative grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-blue-300 font-semibold mb-4">
              {service.tagline}
            </p>
            <div className="flex items-start gap-4 mb-5">
              <span className="font-mono text-[13px] tracking-widest text-white/25 mt-3">
                {service.num}
              </span>
              <h1 className="font-serif text-[32px] md:text-[56px] font-normal text-white leading-[1.1]">
                {service.name}
              </h1>
            </div>
            <p className="text-sm text-blue-300 max-w-[440px] leading-[1.75]">
              {service.summary}
            </p>
          </div>

          {/* Floating image accent */}
          <div className="relative h-[280px] rounded-2xl overflow-hidden hidden lg:block">
            <img
              src={asset(service.image)}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
          </div>
        </div>

        <div className="border-t border-white/10 py-5">
          <p className="text-xs text-white/60 text-center tracking-[0.12em]">
            IP AND COMMERCIAL LAWYERS · SYDNEY CBD
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-surface py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-lg font-semibold text-navy leading-[1.7] mb-8 max-w-3xl">
            {service.leadText}
          </p>
          <div className="space-y-5 max-w-3xl">
            {service.overview.map((para, i) => (
              <p key={i} className="text-sm text-slate leading-[1.85]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-white border-t border-line py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-2">
              What we offer
            </p>
            <h2 className="font-serif text-[32px] font-normal text-navy">
              Our {service.name} services.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            {service.offerings.map((item, i) => (
              <div key={i} className="flex gap-4 py-4 border-b border-line">
                <span className="text-blue mt-0.5 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </span>
                <p className="text-sm text-slate leading-[1.7]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPS */}
      {service.tips && service.tips.length > 0 && (
        <section className="bg-surface border-t border-line py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-2">
                Key considerations
              </p>
              <h2 className="font-serif text-[32px] font-normal text-navy">
                What to keep in mind.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {service.tips.map((tip, i) => (
                <div key={i} className="bg-white border border-line rounded-xl p-6">
                  <div className="w-8 h-8 bg-blue-light rounded-lg flex items-center justify-center mb-4">
                    <span className="font-mono text-xs text-blue font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm text-slate leading-[1.7]">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OTHER SERVICES */}
      <section className="bg-white border-t border-line py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-2">
              Our services
            </p>
            <h2 className="font-serif text-[32px] font-normal text-navy">
              Explore other areas.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative overflow-hidden rounded-xl flex flex-col justify-end"
                style={{ minHeight: "200px" }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <img
                    src={asset(s.image)}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10" />
                <div className="relative p-5">
                  <span className="block text-[9px] font-mono tracking-[0.2em] text-white/40 mb-1">
                    {s.num}
                  </span>
                  <p className="font-serif text-lg text-white font-normal group-hover:text-blue-300 transition-colors">
                    {s.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-navy/95 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/services" className="text-sm text-blue-300 font-medium hover:text-white transition-colors">
            ← All Services
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
