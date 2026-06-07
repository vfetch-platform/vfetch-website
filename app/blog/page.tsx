import type { Metadata } from "next";
import Link from "next/link";
import { BlogGrid } from "@/components/BlogGrid";

export const metadata: Metadata = {
  title: "Blog - VFetch",
  description:
    "Insights on lost & found technology, AI matching, venue operations, and the future of property recovery.",
  alternates: { canonical: "https://vfetch.app/blog" },
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">

      {/* Hero - Featured Post */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-surface-container-low rounded-[2rem] overflow-hidden">
          <div className="lg:col-span-7 relative h-[260px] sm:h-[360px] lg:h-[560px]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHwfD-SbMxPDA-clpf0RU9cpBwCx0LkM0VT3Td2pFkeT69yqhf0eeLEIOlPQYrSpy4Iyqphk_sh7JCFvI4e1TOyNrFk-7BfjZIH08LFONanODOTO8JohRxJtvtzpG07GRLoLzZrKPfq0Qm7XPMSiabAKL5YjR3OSL7xpPtCgfqbPLHeDOwIutrIdPAN7MtMiuxv_dYcF5yXlyYANo-dqYpT-mbnmCcSPoG9g2F8DuTja_lCWw1AVGACvT5s1y92xEMjDfUjvFp4uQ"
              alt="VFetch featured blog post"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-8 left-8">
              <span className="bg-primary text-on-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">
                Featured
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6 text-primary font-bold tracking-tighter text-sm uppercase">
              <span className="material-symbols-outlined text-lg">bolt</span>
              Latest from VFetch
            </div>
            <Link href="/blog/how-ai-is-transforming-lost-property">
              <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface leading-[1.1] mb-6 tracking-tight hover:text-primary transition-colors">
                How AI is Transforming Lost Property at UK Venues
              </h1>
            </Link>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8 font-medium opacity-80">
              VFetch&apos;s AI integration is detecting, cataloguing, and matching lost items faster than ever - setting a new standard for venue property management.
            </p>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">person</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">VFetch Team</p>
                  <p className="text-xs text-on-surface-variant font-medium">Product Update &bull; 5 min read</p>
                </div>
              </div>
              <Link
                href="/blog/how-ai-is-transforming-lost-property"
                className="flex items-center gap-2 text-primary font-bold text-sm tracking-tight hover:gap-4 transition-all"
              >
                Read Article
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable grid (client component) */}
      <BlogGrid />

      {/* Newsletter */}
      <section className="mt-20 bg-[#0D7B6C] text-white rounded-[2rem] p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="bg-white/15 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
            VFetch Updates
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
            Stay in the Loop
          </h2>
          <p className="text-white/80 text-lg mb-10 font-medium leading-relaxed">
            Get product updates, venue tips, and lost &amp; found insights delivered straight to your inbox. No spam - ever.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-white/15 border border-white/30 rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/50 transition-all outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#0D7B6C] font-bold px-8 py-4 rounded-xl hover:bg-[#EAF7F4] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
