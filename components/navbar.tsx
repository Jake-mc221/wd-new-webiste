import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white border-b border-line z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/">
          <img
            src="/logo3.png"
            alt="Wallington Dummer"
            className="h-12"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(26%) sepia(55%) saturate(950%) hue-rotate(188deg) brightness(103%) contrast(90%)",
            }}
          />
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm text-slate">
          <Link href="/" className="text-foreground font-medium">Home</Link>
          <Link href="/firm" className="hover:text-navy transition-colors">Our Firm</Link>
          <Link href="/services" className="hover:text-navy transition-colors">Services</Link>
          <a href="#" className="hover:text-navy transition-colors">Blog</a>
          <Link href="/faq" className="hover:text-navy transition-colors">FAQ</Link>
          <Link
            href="/contact"
            className="px-5 py-2 bg-navy text-white text-xs font-medium rounded-md hover:bg-navy-light transition-colors"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
}
