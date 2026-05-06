"use client";

import { useState } from "react";

const areas = [
  "Patents",
  "Trade Marks",
  "Designs",
  "Plant Breeder's Rights",
  "General Enquiry",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white border border-line rounded-lg px-4 py-3 text-sm text-navy placeholder:text-slate/40 focus:outline-none focus:border-blue/50 focus:ring-2 focus:ring-blue/10 transition-all";

  if (submitted) {
    return (
      <div className="flex flex-col items-start justify-center py-16">
        <div className="w-12 h-12 bg-blue-light rounded-full flex items-center justify-center mb-5">
          <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-[26px] font-normal text-navy mb-3">
          Message received.
        </h3>
        <p className="text-sm text-slate leading-[1.8] mb-6 max-w-sm">
          Thank you for getting in touch. A member of our team will be in
          contact with you shortly. For urgent matters, please call us directly
          on <a href="tel:+61292211040" className="text-blue">(02) 9221 1040</a>.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", area: "", message: "" }); }}
          className="text-sm text-blue font-medium hover:underline"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-[0.12em] uppercase text-slate font-medium mb-2">
            Full Name <span className="text-blue">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.12em] uppercase text-slate font-medium mb-2">
            Email <span className="text-blue">*</span>
          </label>
          <input
            required
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-[0.12em] uppercase text-slate font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            placeholder="+61 4xx xxx xxx"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs tracking-[0.12em] uppercase text-slate font-medium mb-2">
            Area of Interest
          </label>
          <select
            value={form.area}
            onChange={(e) => setForm({ ...form, area: e.target.value })}
            className={`${inputClass} text-slate/60 ${form.area ? "text-navy" : ""}`}
          >
            <option value="">Select an area</option>
            {areas.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[0.12em] uppercase text-slate font-medium mb-2">
          Message <span className="text-blue">*</span>
        </label>
        <textarea
          required
          rows={5}
          placeholder="Tell us briefly about your situation and what you're looking to protect..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </div>

      <p className="text-xs text-slate/50 leading-relaxed">
        By submitting this form you agree to be contacted by Wallington Dummer in relation to your enquiry.
        Your information will not be shared with third parties.
      </p>

      <button
        type="submit"
        className="w-full bg-navy text-white py-3.5 rounded-lg text-sm font-semibold hover:bg-navy-light transition-colors flex items-center justify-center gap-2 group"
      >
        Send Message
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </form>
  );
}
