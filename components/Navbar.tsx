"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useCalendly } from "./CalendlyContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/for-venues", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Resources" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { open: openCalendly } = useCalendly();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm" : "bg-white/70 backdrop-blur-xl"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-[#0D7B6C]">
          VFetch
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    active
                      ? "text-[#0D7B6C] font-semibold"
                      : "text-[#6B7280] hover:text-[#0D7B6C]"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#0D7B6C] transition-all duration-200 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openCalendly}
            className="text-sm font-semibold bg-[#0D7B6C] hover:bg-[#0B6B5E] text-white rounded-xl px-5 py-2 transition-colors shadow-md"
          >
            Book Demo
          </button>
          <Link
            href="/for-venues#contact"
            className="text-sm font-semibold border border-[#9CA3AF]/25 text-[#6B7280] hover:border-[#0D7B6C] hover:text-[#0D7B6C] rounded-xl px-5 py-2 transition-colors"
          >
            Talk to Sales
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#6B7280] hover:text-[#0D7B6C] hover:bg-[#F3F4F6] transition-colors cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#9CA3AF]/25 px-6 pb-6 pt-4">
          <ul className="flex flex-col mb-5">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`block text-sm font-semibold py-3 border-b border-[#9CA3AF]/25 transition-colors ${
                      active ? "text-[#0D7B6C]" : "text-[#6B7280] hover:text-[#0D7B6C]"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-3 pt-1">
            <button
              onClick={() => { openCalendly(); setOpen(false); }}
              className="text-center text-sm font-semibold bg-[#0D7B6C] text-white rounded-xl px-5 py-3 hover:bg-[#0B6B5E] transition-colors"
            >
              Book Demo
            </button>
            <Link
              href="/for-venues#contact"
              className="text-center text-sm font-semibold border border-[#0D7B6C] text-[#0D7B6C] rounded-xl px-5 py-3 hover:bg-[#0D7B6C]/5 transition-colors"
              onClick={() => setOpen(false)}
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
