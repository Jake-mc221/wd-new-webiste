"use client";

import { useState } from "react";
import type { FaqCategory } from "./data";

export default function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen((prev) => (prev === key ? null : key));

  return (
    <div className="space-y-12">
      {categories.map((cat) => (
        <div key={cat.category}>
          <h2 className="font-serif text-[22px] font-normal text-navy mb-4 pb-4 border-b-2 border-blue/20">
            {cat.category}
          </h2>
          <div className="space-y-0">
            {cat.items.map((item, i) => {
              const key = `${cat.category}-${i}`;
              const isOpen = open === key;
              return (
                <div key={key} className="border-b border-line">
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                  >
                    <span className={`text-base font-medium transition-colors duration-200 ${isOpen ? "text-blue" : "text-navy group-hover:text-blue"}`}>
                      {item.q}
                    </span>
                    <span className={`shrink-0 mt-0.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-blue border-blue rotate-45" : "border-line group-hover:border-blue"}`}>
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        className={`transition-colors duration-200 ${isOpen ? "text-white" : "text-slate group-hover:text-blue"}`}
                      >
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>

                  {/* Smooth height animation via CSS grid trick */}
                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-slate leading-[1.85] pb-6 max-w-3xl">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
