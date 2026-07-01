import Navbar from "@/components/navbar";
import Link from "next/link";
import Footer from "@/components/footer";
import { asset } from "@/lib/asset";

const services = [
  { num: "01", title: "Patents",     img: "/1.jpg",  dark: true,  href: "/services/patents"         },
  { num: "02", title: "Trade Marks", img: "/2.png",  dark: false, href: "/services/trade-marks"     },
  { num: "03", title: "Designs",     img: "/3.jpg",  dark: true,  href: "/services/designs"         },
  { num: "04", title: "Copyright",   img: "/4.jpg",  dark: false, href: "/services"                 },
];

const brandLogos = [
  "RA-LOGO.png",
  "Stormseal-e1477032471234.png",
  "allshelter-logo-col.png",
  "probus-logo.png",
  "pink-poppy-logo.png",
  "motoman-logo.png",
  "tuffa-logo.png",
  "nars-logo.png",
  "kohnkes-own-logo.png",
  "laura-mercier-logo.png",
  "hikvision-logo.png",
  "downloadsa.png",
];

const features = [
  {
    title: "Experienced Attorneys",
    desc: "Decades of specialist experience across all areas of IP.",
  },
  {
    title: "Clear, Practical Advice",
    desc: "Actionable guidance tailored to your business goals and budget.",
  },
  {
    title: "Global IP Protection",
    desc: "International reach through our trusted attorney network.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-foreground">
      <Navbar />

      {/* HERO — pt accounts for fixed navbar (64px) + breathing room (64px) */}
      <section className="bg-navy relative overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-[38%] bg-white/[0.04]"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div className="max-w-5xl mx-auto px-6 pt-[100px] md:pt-[128px] pb-16 relative">
          <p className="text-xs tracking-[0.18em] uppercase text-blue-300 font-semibold mb-4">
            Intellectual Property
          </p>
          <h1 className="font-serif text-[38px] md:text-[64px] font-normal text-white leading-[1.1] max-w-[640px] mb-5">
            Secure, Protect, Build, <em>Maximise Your IP</em>
          </h1>
          <p className="text-sm text-blue-300 max-w-[440px] leading-[1.75] mb-8">
            Trusted by
            innovators, creators, and businesses worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="bg-white text-navy px-6 py-3 rounded-md text-sm font-semibold"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="border border-white/35 text-white px-6 py-3 rounded-md text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 py-5">
          <p className="text-xs text-white/60 text-center tracking-[0.12em]">
            SYDNEY CBD
          </p>
        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section id="services" className="bg-surface py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-2">
              Our Expertise
            </p>
            <h2 className="font-serif text-[32px] font-normal text-navy">
              Trusted guidance with experience.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-xl overflow-hidden aspect-[3/4] relative"
                style={{
                  backgroundImage: `url(${asset(s.img)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: s.dark ? "#4a82c2" : "#5a92d2",
                }}
              >
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-80"
                  style={{
                    background: s.dark
                      ? "linear-gradient(to top, rgba(74,130,194,0.92) 40%, rgba(74,130,194,0.3) 100%)"
                      : "linear-gradient(to top, rgba(90,146,210,0.92) 40%, rgba(90,146,210,0.3) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="block text-[10px] font-mono tracking-[0.2em] text-white/40 mb-1.5">
                    {s.num}
                  </span>
                  <span className="text-white text-base font-medium">{s.title}</span>
                  <span className="block text-xs text-white/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="bg-white border-t border-line py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-blue font-semibold mb-3">
              About Us
            </p>
            <h2 className="font-serif text-[32px] font-normal text-navy mb-4">
              Decades of IP expertise.
            </h2>
            <p className="text-sm text-slate leading-[1.8] mb-5">
              Wallington-Dummer provides practical and strategic intellectual
              property advice to protect and grow your ideas, navigating complex
              IP landscapes with clarity and confidence.
            </p>
            <a href="/firm" className="text-sm text-blue font-medium">
              Meet our team →
            </a>
          </div>
          <div className="border-l-[3px] border-blue pl-7">
            <p className="font-serif text-xl text-navy italic leading-[1.65]">
              "Protecting the ideas that shape tomorrow — with precision,
              integrity, and passion."
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white border-t border-line py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="border border-line rounded-xl p-6">
              <div className="w-10 h-10 bg-blue-light rounded-lg flex items-center justify-center mb-4">
                <div className="w-4 h-4 border-2 border-blue rounded-sm" />
              </div>
              <p className="text-base font-semibold text-foreground mb-2">{f.title}</p>
              <p className="text-sm text-slate leading-[1.6]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-surface border-t border-line py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs tracking-[0.18em] uppercase text-slate/50 font-semibold text-center mb-10">
            A selection of brands we have worked with
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {brandLogos.map((logo) => (
              <div
                key={logo}
                className="h-24 flex items-center justify-center p-6"
              >
                <img
                  src={asset(`/comp_logos/${logo}`)}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSOCIATIONS */}
      <section className="bg-surface border-t border-line py-12">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs tracking-[0.18em] uppercase text-slate/50 font-semibold text-center mb-8">
            Professional Memberships
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { abbr: "IPSANZ", name: "Intellectual Property Society of Australia and New Zealand" },
              { abbr: "INTA",   name: "International Trademark Association" },
              { abbr: "IPTA",   name: "Institute of Patent and Trade Mark Attorneys of Australia" },
              { abbr: "AIPPI",  name: "International Association for the Protection of Intellectual Property" },
            ].map((assoc) => (
              <div
                key={assoc.abbr}
                className="flex flex-col items-center justify-center text-center border border-line rounded-xl p-6 bg-white hover:border-navy/20 hover:shadow-sm transition-all duration-200"
              >
                <span className="font-serif text-[22px] font-normal text-navy mb-2">{assoc.abbr}</span>
                <span className="text-[10px] text-slate/60 leading-[1.6] tracking-wide">{assoc.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-navy py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-blue-300 font-semibold mb-3">
              Get in Touch
            </p>
            <h2 className="font-serif text-[32px] font-normal text-white mb-3">
              Ready to protect your IP?
            </h2>
            <p className="text-sm text-white/55 mb-6 leading-[1.75]">
              Our team is ready to help. Reach out to our Sydney office.
            </p>
            <a
              href="mailto:mail2@wallington-dummer.com"
              className="bg-white text-navy px-6 py-3 rounded-md text-sm font-semibold inline-block"
            >
              Email Us
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs tracking-[0.18em] text-blue-300 uppercase mb-3">
                Sydney
              </p>
              <p className="text-sm text-white/60 leading-[1.9]">
                Suite 1005
                <br />
                66 Hunter St
                <br />
                (02) 9221 1040
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
