import Navbar from "@/components/navbar";
import Link from "next/link";
import { team } from "@/app/firm/data";
import Footer from "@/components/footer";

export default function FirmPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* PAGE HEADER */}
      <div className="bg-navy relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-[38%] bg-white/[0.04]"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="max-w-5xl mx-auto px-6 pt-[112px] pb-14 relative">
          <p className="text-xs tracking-[0.18em] uppercase text-blue-300 font-semibold mb-4">
            Our Firm
          </p>
          <h1 className="font-serif text-[48px] font-normal text-white leading-[1.1] max-w-[540px] mb-5">
            Meet the team behind <em>Wallington Dummer</em>
          </h1>
          <p className="text-sm text-blue-300 max-w-[460px] leading-[1.75]">
            A dynamic Australian patent and trade mark attorney firm, established
            in the 1990s and based in Sydney. We deliver practical and innovative
            IP solutions for clients ranging from individuals to multinationals.
          </p>
        </div>
        <div className="border-t border-white/10 py-5">
          <p className="text-xs text-white/60 text-center tracking-[0.12em]">
            IP AND COMMERCIAL LAWYERS · SYDNEY CBD
          </p>
        </div>
      </div>

      {/* TEAM GRID */}
      <section className="bg-surface py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-2">
              Our People
            </p>
            <h2 className="font-serif text-[32px] font-normal text-navy">
              Experienced across all areas of IP law.
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {team.map((person) => (
              <div
                key={person.slug}
                className="group bg-white rounded-xl overflow-hidden border border-line hover:border-navy/20 hover:shadow-lg transition-all duration-300"
              >
                {/* Photo — clicking this navigates to profile */}
                <Link href={`/firm/${person.slug}`} className="block aspect-[4/5] bg-navy relative overflow-hidden">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </Link>

                {/* Info */}
                <div className="p-6">
                  <p className="text-[10px] tracking-[0.18em] uppercase text-blue font-semibold mb-2">
                    {person.title}
                  </p>
                  <Link href={`/firm/${person.slug}`}>
                    <h3 className="font-serif text-[22px] font-normal text-navy mb-1 group-hover:text-navy-light transition-colors">
                      {person.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-slate mb-3">{person.role}</p>
                  <div className="border-t border-line pt-3 flex items-center justify-between">
                    <p className="text-xs text-slate/70">{person.credentials}</p>
                    <div className="flex items-center gap-3">
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate/40 hover:text-blue transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                          </svg>
                        </a>
                      )}
                      <Link href={`/firm/${person.slug}`} className="text-xs text-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View profile →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIRM DESCRIPTION */}
      <section className="bg-white border-t border-line py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-3">
              Our Approach
            </p>
            <h2 className="font-serif text-[32px] font-normal text-navy mb-5">
              Practical advice, personalised service.
            </h2>
            <div className="space-y-4 text-sm text-slate leading-[1.8]">
              <p>
                Wallington Dummer provides practical and strategic intellectual
                property advice to protect and grow your ideas, navigating complex
                IP landscapes with clarity and confidence.
              </p>
              <p>
                We offer complimentary initial consultations and flat-fee pricing
                for IP applications, supported by an electronic tracking system
                to keep you informed at every stage.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { label: "Founded", value: "1990s" },
              { label: "Location", value: "Sydney CBD" },
              { label: "Practice Areas", value: "Patents, Trade Marks, Designs, Copyright" },
              { label: "Jurisdictions", value: "Australia · New Zealand · International" },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 py-4 border-b border-line last:border-0">
                <span className="text-xs tracking-[0.12em] uppercase text-slate/60 w-32 shrink-0 pt-0.5">
                  {item.label}
                </span>
                <span className="text-sm text-navy font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
