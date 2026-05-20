import Navbar from "@/components/navbar";
import Link from "next/link";
import ContactForm from "./contact-form";
import Footer from "@/components/footer";

const offices = [
  {
    city: "Sydney",
    address: "Suite 1005\n66 Hunter Street\nSydney NSW 2000",
    phone: "(02) 9221 1040",
    fax: "(02) 9221 1605",
    email: "mail2@wallington-dummer.com",
    maps: "https://maps.google.com/?q=66+Hunter+Street+Sydney+NSW+2000",
  },
];

export default function ContactPage() {
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
            Contact Us
          </p>
          <h1 className="font-serif text-[32px] md:text-[56px] font-normal text-white leading-[1.1] max-w-[560px] mb-5">
            Let's talk about <em>protecting your ideas.</em>
          </h1>
          <p className="text-sm text-blue-300 max-w-[440px] leading-[1.75]">
            Initial consultations are complimentary. Reach out and one of our
            attorneys will be in touch shortly.
          </p>
        </div>
        <div className="border-t border-white/10 py-5">
          <p className="text-xs text-white/60 text-center tracking-[0.12em]">
            IP AND COMMERCIAL LAWYERS · SYDNEY CBD
          </p>
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section className="bg-surface py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">

          {/* Form */}
          <div className="bg-white border border-line rounded-2xl p-8">
            <div className="mb-7">
              <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-2">
                Send a message
              </p>
              <h2 className="font-serif text-[28px] font-normal text-navy">
                How can we help you?
              </h2>
            </div>
            <ContactForm />
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {offices.map((office) => (
              <div key={office.city} className="bg-white border border-line rounded-2xl p-6">
                <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-4">
                  {office.city}
                </p>
                <p className="text-sm text-navy font-medium leading-[1.9] mb-4 whitespace-pre-line">
                  {office.address}
                </p>
                <div className="space-y-2 text-sm border-t border-line pt-4">
                  {office.phone && (
                    <p className="flex gap-3">
                      <span className="text-slate/50 w-8 shrink-0">Ph</span>
                      <a href={`tel:${office.phone.replace(/\D/g, "")}`} className="text-slate hover:text-navy transition-colors">
                        {office.phone}
                      </a>
                    </p>
                  )}
                  {office.fax && (
                    <p className="flex gap-3">
                      <span className="text-slate/50 w-8 shrink-0">Fax</span>
                      <span className="text-slate">{office.fax}</span>
                    </p>
                  )}
                  <p className="flex gap-3">
                    <span className="text-slate/50 w-8 shrink-0">Em</span>
                    <a href={`mailto:${office.email}`} className="text-blue hover:text-navy transition-colors break-all">
                      {office.email}
                    </a>
                  </p>
                </div>
                <a
                  href={office.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-xs text-slate hover:text-blue transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  View on Google Maps
                </a>
              </div>
            ))}

            {/* Quick links */}
            <div className="bg-navy rounded-2xl p-6">
              <p className="text-xs tracking-[0.18em] uppercase text-blue-300 font-semibold mb-4">
                Before you get in touch
              </p>
              <p className="text-sm text-white/60 leading-[1.75] mb-4">
                You may find an answer to your question in our FAQ section.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm text-white font-medium hover:text-blue-300 transition-colors"
              >
                Browse the FAQ
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAPS */}
      <section className="bg-surface border-t border-line py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-2">
              Our Offices
            </p>
            <h2 className="font-serif text-[32px] font-normal text-navy">
              Find us in Sydney.
            </h2>
          </div>
          <div>
            <p className="text-sm font-semibold text-navy mb-3">Suite 1005, 66 Hunter Street, Sydney NSW 2000</p>
            <div className="rounded-xl overflow-hidden border border-line h-[360px]">
              <iframe
                src="https://www.google.com/maps?q=66+Hunter+Street,+Sydney+NSW+2000,+Australia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white border-t border-line py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 text-center">
            <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-2">
              What to expect
            </p>
            <h2 className="font-serif text-[32px] font-normal text-navy">
              How we work with new clients.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Free Consultation",
                desc: "We begin with a no-obligation conversation to understand your situation and goals.",
              },
              {
                num: "02",
                title: "Strategy & Advice",
                desc: "We provide a clear assessment of your options and the best path forward.",
              },
              {
                num: "03",
                title: "Filing & Prosecution",
                desc: "We handle all drafting, filing and correspondence with IP offices on your behalf.",
              },
              {
                num: "04",
                title: "Ongoing Management",
                desc: "We track deadlines, manage renewals and keep your IP portfolio protected.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-10 h-10 bg-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-mono text-xs text-blue font-semibold">{step.num}</span>
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-slate leading-[1.7]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
