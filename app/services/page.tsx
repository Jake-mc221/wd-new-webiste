import Navbar from "@/components/navbar";
import Link from "next/link";
import { services } from "@/app/services/data";
import Footer from "@/components/footer";
import { asset } from "@/lib/asset";

const stats = [
  { value: "25+", label: "Years of experience" },
  { value: "4",   label: "IP disciplines" },
  { value: "1",   label: "CBD location" },
  { value: "∞",   label: "Global reach" },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="bg-navy relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-[38%] bg-white/[0.04]"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="max-w-5xl mx-auto px-6 pt-[128px] pb-16 relative">
          <p className="text-xs tracking-[0.18em] uppercase text-blue-300 font-semibold mb-4">
            Our Services
          </p>
          <h1 className="font-serif text-[32px] md:text-[56px] font-normal text-white leading-[1.1] max-w-[600px] mb-5">
            Comprehensive IP protection, from <em>concept to commercialisation.</em>
          </h1>
          <p className="text-sm text-blue-300 max-w-[460px] leading-[1.75]">
            Wallington-Dummer provides a full range of IP services spanning the
            entire intellectual property life cycle — patents, trade marks,
            designs and plant breeder's rights.
          </p>
        </div>
        <div className="border-t border-white/10 py-5">
          <p className="text-xs text-white/60 text-center tracking-[0.12em]">
            SYDNEY CBD
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="bg-surface py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative overflow-hidden rounded-2xl flex flex-col justify-end"
                style={{ minHeight: "380px" }}
              >
                {/* Background image — scales on hover */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <img
                    src={asset(s.image)}
                    alt={s.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Gradient overlay — deepens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Large decorative number */}
                <span className="absolute top-6 right-7 font-mono text-[88px] font-bold text-white/[0.06] leading-none select-none transition-all duration-500 group-hover:text-white/[0.10]">
                  {s.num}
                </span>

                {/* Content — slides up on hover */}
                <div className="relative p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-blue-300 font-semibold mb-3">
                    {s.tagline}
                  </p>
                  <h3 className="font-serif text-[30px] font-normal text-white mb-3 leading-tight">
                    {s.name}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-[320px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {s.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm text-white font-medium border-b border-white/30 pb-0.5 group-hover:border-white transition-colors duration-300">
                    Explore {s.name}
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white border-t border-line py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-[48px] font-normal text-navy leading-none mb-2">
                {s.value}
              </p>
              <p className="text-xs tracking-[0.12em] uppercase text-slate">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY IP MATTERS */}
      <section className="bg-surface border-t border-line py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-3">
              Why it matters
            </p>
            <h2 className="font-serif text-[36px] font-normal text-navy mb-5 leading-tight">
              Your ideas deserve protection from day one.
            </h2>
            <p className="text-sm text-slate leading-[1.85] mb-4">
              Intellectual property rights don't protect themselves. Without the right
              registrations in place, competitors can copy your inventions, imitate your
              brand, and replicate your designs — often legally.
            </p>
            <p className="text-sm text-slate leading-[1.85] mb-6">
              Wallington-Dummer works with clients from their first idea through to
              international commercialisation, providing practical, cost-effective advice
              tailored to real business objectives.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-navy-light transition-colors"
            >
              Book a free consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="space-y-0">
            {[
              { num: "01", text: "Initial consultation — we understand your idea and commercial goals." },
              { num: "02", text: "Strategy — we advise the best form of IP protection for your situation." },
              { num: "03", text: "Filing — we prepare and lodge your application with precision." },
              { num: "04", text: "Protection — we manage your IP and respond to any challenges." },
            ].map((step) => (
              <div key={step.num} className="flex gap-6 py-5 border-b border-line last:border-0 group">
                <span className="font-mono text-[11px] tracking-widest text-blue font-semibold pt-0.5 shrink-0">
                  {step.num}
                </span>
                <p className="text-sm text-slate leading-[1.75]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      

      <Footer />
    </main>
  );
}
