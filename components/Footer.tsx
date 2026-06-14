import Link from "next/link";

const productLinks = [
  { href: "/for-venues", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
];

const companyLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="bg-[#FAFBFC] border-t border-[#9CA3AF]/25 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold text-[#0D7B6C]">
              VFetch
            </Link>
            <p className="mt-3 text-sm text-[#6B7280] leading-relaxed max-w-xs">
              AI-powered lost property management for hotels, stadiums, festivals
              and hospitality venues.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#111827] mb-4">
              Product
            </h3>
            <ul className="flex flex-col gap-3">
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#6B7280] hover:text-[#0D7B6C] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#111827] mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#6B7280] hover:text-[#0D7B6C] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#111827] mb-4">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-[#6B7280] hover:text-[#0D7B6C] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#9CA3AF]/25">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#6B7280]">
            © 2026 VFetch. All rights reserved.
          </p>
          <p className="text-sm text-[#9CA3AF]">
            London, United Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
}
