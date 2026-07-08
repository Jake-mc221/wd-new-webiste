"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { asset } from "@/lib/asset";
import MobileMenu from "@/components/mobile-menu";

const navLinks = [
  { href: "/",        label: "Home"     },
  { href: "/firm",    label: "Our Firm" },
  { href: "/services",label: "Services" },
  { href: "/blog",    label: "Blog"     },
  { href: "/faq",     label: "FAQ"      },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed w-full bg-white border-b border-line z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/">
          <img
            src={asset("/logo3.png")}
            alt="Wallington-Dummer"
            className="h-16"
          />
        </Link>

        <MobileMenu />
        <div className="hidden md:flex items-center gap-6 text-sm text-slate">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-navy ${
                isActive(href) ? "text-foreground font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
<Link
            href="/contact"
            className={`px-5 py-2 text-xs font-medium rounded-md transition-colors ${
              isActive("/contact")
                ? "bg-navy-light text-white"
                : "bg-navy text-white hover:bg-navy-light"
            }`}
          >
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
}
