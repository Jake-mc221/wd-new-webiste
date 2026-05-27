"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/",         label: "Home"       },
  { href: "/firm",     label: "Our Firm"   },
  { href: "/services", label: "Services"   },
  { href: "/blog",     label: "Blog"       },
  { href: "/faq",      label: "FAQ"        },
  { href: "/contact",  label: "Contact Us" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="p-2 text-slate hover:text-navy transition-colors"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-line shadow-lg z-50">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm transition-colors hover:text-navy ${
                  i < links.length - 1 ? "border-b border-line" : ""
                } ${isActive(href) ? "font-semibold text-foreground" : "text-slate"}`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
