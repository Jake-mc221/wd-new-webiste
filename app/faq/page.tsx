import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { faqs } from "./data";
import FaqAccordion from "./faq-accordion";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-navy relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-[38%] bg-white/[0.04]"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="max-w-5xl mx-auto px-6 pt-[128px] pb-16 relative">
          <p className="text-xs tracking-[0.18em] uppercase text-blue-300 font-semibold mb-4">
            FAQ
          </p>
          <h1 className="font-serif text-[32px] md:text-[56px] font-normal text-white leading-[1.1] max-w-[580px] mb-5">
            Answers to your <em>most common questions.</em>
          </h1>
          <p className="text-sm text-blue-300 max-w-[440px] leading-[1.75]">
            Everything you need to know about intellectual property protection,
            our services, and how we work with clients. Can't find what you're
            looking for? Get in touch — we're happy to help.
          </p>
        </div>
        <div className="border-t border-white/10 py-5">
          <p className="text-xs text-white/60 text-center tracking-[0.12em]">
            SYDNEY CBD
          </p>
        </div>
      </section>

      {/* QUICK JUMP */}
      <section className="bg-surface border-b border-line py-5 sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-6 flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate/60 mr-2">Jump to:</span>
          {faqs.map((cat) => (
            <a
              key={cat.category}
              href={`#${cat.category.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              className="text-xs text-slate hover:text-blue border border-line hover:border-blue/30 px-3 py-1.5 rounded-full transition-colors"
            >
              {cat.category}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-16 items-start">

          {/* Accordion */}
          <div>
            <FaqAccordion categories={faqs} />
          </div>

          {/* Sidebar */}
          <div className="hidden md:block sticky top-36 space-y-5">
            <div className="bg-navy rounded-xl p-6">
              <p className="text-xs tracking-[0.18em] uppercase text-blue-300 font-semibold mb-3">
                Still have questions?
              </p>
              <p className="text-sm text-white/70 leading-[1.75] mb-5">
                Our team is happy to answer any questions not covered here.
                Initial consultations are complimentary.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white text-navy px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-light transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <div className="border border-line rounded-xl p-6">
              <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-3">
                Our Services
              </p>
              <div className="space-y-2">
                {["Patents", "Trade Marks", "Designs", "Plant Breeder's Rights"].map((s) => (
                  <Link
                    key={s}
                    href={`/services/${s.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className="flex items-center justify-between py-2 border-b border-line last:border-0 text-sm text-slate hover:text-navy transition-colors group"
                  >
                    {s}
                    <svg className="w-3.5 h-3.5 text-slate/30 group-hover:text-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
