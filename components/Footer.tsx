import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/for-venues", label: "For Venues" },
  { href: "/faq", label: "FAQs" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-[#e7eeff] w-full py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-[#00685f] mb-2">VFetch</div>
            <p className="text-sm text-slate-500">
              © 2026 VFetch. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-slate-500 hover:text-[#00685f] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
