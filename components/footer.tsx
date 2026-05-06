export default function Footer() {
  return (
    <footer className="bg-navy">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Top row */}
        <div className="flex justify-between items-center pb-6 border-b border-white/10">
          <span className="text-sm text-white/50">
            © {new Date().getFullYear()} Wallington Dummer
          </span>
          <div className="flex gap-5 text-sm text-white/50">
            <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/80 transition-colors">Disclaimer</a>
          </div>
        </div>

        {/* Ownership group */}
        <div className="pt-5">
          <p className="text-[10px] tracking-[0.12em] uppercase text-white/30 font-semibold mb-2">
            Ownership Group
          </p>
          <p className="text-xs text-white/30 leading-[1.8] max-w-3xl">
            Peter Dummer trading as Wallington-Dummer; Wallington-Dummer Pty Ltd; Wallington-Dummer Legal Pty Ltd;
            form an Ownership Group for the purposes of the Australian and New Zealand Code of Conduct for
            Trans-Tasman Patent and Trade Marks Attorneys 2018. A Principal as designated above is a person
            who is a shareholder, owner or director as the case may be of at least one of the entities of
            the Ownership Group.
          </p>
        </div>
      </div>
    </footer>
  );
}
